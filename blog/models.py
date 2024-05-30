from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField

from rest_framework.fields import DateField

# add this:
from wagtail.search import index

from wagtail.images.models import Image
from wagtail.images.api.fields import ImageRenditionField

# keep the definition of BlogIndexPage model, and add the BlogPage model:


class BlogPage(Page):
    thumb = models.ForeignKey(
        Image,
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name='+',
    )

    intro = models.CharField(max_length=250)
    body = RichTextField(blank=True)
    localize_default_translation_mode = 'simple'

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
        index.SearchField('seo_title'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('thumb'),
        FieldPanel('intro'),
        FieldPanel('body'),
    ]

    api_fields = [
        APIField('body'),
        APIField('thumb'),
        APIField(
            'th_fb', serializer=ImageRenditionField('fill-1280x628', source='thumb')
        ),
        APIField(
            'th_x', serializer=ImageRenditionField('fill-800x418', source='thumb')
        ),
        # APIField(
        #     'authors'
        # ),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]
