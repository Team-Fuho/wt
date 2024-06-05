from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField

from base.models import TFImage, TFRenditionGroup

# add this:
from wagtail.search import index

# keep the definition of BlogIndexPage model, and add the BlogPage model:

from rest_framework import serializers


class Picture(Page, TFRenditionGroup):
    image = models.ForeignKey(
        TFImage,
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name='+',
    )

    cap = models.CharField('Caption', max_length=1024)

    search_fields = Page.search_fields + [
        index.SearchField('cap'),
        index.SearchField('seo_title'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('cap'),
        FieldPanel('image'),
    ]

    @property
    def image_date(self):
        return self.image.created_at

    @property
    def image_set(self):
        return self.rendition_set(
            self.image,
            TFRenditionGroup.base
            | {
                'bento/rice': 'fill-1440x810|jpegquality-100',
                'bento/fish': 'fill-960x540|jpegquality-95',
                'bento/sushi': 'fill-480x270|jpegquality-75',
            },
        )

    api_fields = [
        APIField('cap'),
        APIField('image'),
        APIField('image_date'),
        APIField('image_set'),
        # APIField(
        #     'authors'
        # ),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]
