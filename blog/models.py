from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField

from rest_framework.fields import DateField

# add this:
from wagtail.search import index

# keep the definition of BlogIndexPage model, and add the BlogPage model:


class BlogPage(Page):
    date = models.DateField('Post date')
    thumb = models.ImageField('Thumbnail', blank=True)
    intro = models.CharField(max_length=250)
    body = RichTextField(blank=True)
    localize_default_translation_mode = "simple"

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('thumb'),
        FieldPanel('intro'),
        FieldPanel('body'),
    ]

    api_fields = [
        APIField(
            'date',
            serializer=DateField(format='%Y-%m-%dT%H:%M:%SZ'),
        ),
        APIField('body'),
        APIField('thumb'),
        # APIField(
        #     'authors'
        # ),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]
