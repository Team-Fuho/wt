from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField

from rest_framework.fields import DateField

# add this:
from wagtail.search import index

# keep the definition of BlogIndexPage model, and add the BlogPage model:


class Picture(Page):
    date = models.DateField('Post Date')
    image = models.ImageField('Picture', blank=True)
    cap = models.CharField('Caption', max_length=1024)

    search_fields = Page.search_fields + [
        index.SearchField('cap'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('cap'),
        FieldPanel('image'),
    ]

    api_fields = [
        APIField(
            'date',
            serializer=DateField(format='%Y-%m-%dT%H:%M:%SZ'),
        ),
        APIField('cap'),
        APIField('image'),
        # APIField(
        #     'authors'
        # ),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]
