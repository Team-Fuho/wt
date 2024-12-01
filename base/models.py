import datetime
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from django.db import models

from wagtail.images.models import Image, AbstractImage, AbstractRendition
from wagtail.snippets.models import register_snippet

from urllib import parse
from pathlib import PurePath

from fuhoblog.settings.base import WAGTAILADMIN_BASE_URL

from django.utils import timezone

from grapple.models import (
    GraphQLString,
    GraphQLImage,
)

import re


class TFFuncGroup(Page):
    label = models.CharField(max_length=255, unique=True)
    content_panels = Page.content_panels + [
        FieldPanel('label'),
    ]
    api_fields = []


class TFImage(AbstractImage):
    id = models.AutoField(primary_key=True)

    created_at = models.DateTimeField(
        verbose_name=('created at'), auto_now_add=False, db_index=True
    )

    # To add a caption field:
    # caption = models.CharField(max_length=255, blank=True)

    admin_form_fields = (
        Image.admin_form_fields
        + (
            # Then add the field names here to make them appear in the form:
            # 'caption',
        )
    )

    def save(self, *args, **kwargs):
        """On save, update timestamps"""
        if not self.id and not self.created_at:
            self.created_at = kwargs.get('created_at') or datetime.datetime.now(
                tz=timezone.get_current_timezone()
            )
        return super().save(*args, **kwargs)


class TFRendition(AbstractRendition):
    id = models.AutoField(primary_key=True)
    image = models.ForeignKey(
        TFImage, on_delete=models.CASCADE, related_name='renditions'
    )

    class Meta:
        unique_together = (('image', 'filter_spec', 'focal_point_key'),)


PARSED_URL = parse.urlparse(WAGTAILADMIN_BASE_URL)


def urlpthn(weirdPath: str) -> str:
    global PARSED_URL
    return parse.urlunparse(
        (
            PARSED_URL.scheme,
            PARSED_URL.netloc,
            '/'.join(
                parse.quote_plus(seg)
                for seg in (PurePath(weirdPath).as_posix()).split('/')
            ),
            None,
            '',
            '',
        )
    )


RES_FROM_REND = re.compile(r'^\D{4,5}-(\d{1,8})\D(\d{1,8})')


def img_obj(r: AbstractRendition):
    return {'url': r.full_url, 'res': [r.width, r.height]}


class TFRenditionGroup:
    base = {
        'media/facebook': 'fill-1280x628',
        'media/x': 'fill-800x418',
    }

    def rendition_set(
        self, image: TFImage, rset: dict[str, str] = {}
    ) -> dict[str, dict[str, str]]:
        return dict((k, img_obj(image.get_rendition(v))) for k, v in (rset).items()) | {
            'default/full': {
                'url': urlpthn('/media/' + image.get_upload_to(image.filename)),
                'res': [image.width, image.height],
            },
        }


@register_snippet
class TFAuthor(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField('name', max_length=127)
    image = models.ForeignKey(
        TFImage, null=True, blank=True, on_delete=models.SET_NULL, related_name='+'
    )

    panels = [FieldPanel('name'), FieldPanel('image')]

    graphql_fields = [GraphQLString('name'), GraphQLImage('image')]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Authors'
