from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField
from wagtail.search import index

from base.models import TFImage, TFRenditionGroup

# keep the definition of BlogIndexPage model, and add the BlogPage model:


class BlogPage(Page, TFRenditionGroup):
    thumb = models.ForeignKey(
        TFImage,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='+',
    )

    intro = models.CharField(max_length=250, blank=True)
    body = RichTextField(blank=True)
    localize_default_translation_mode = 'simple'

    search_fields = Page.search_fields + [
        index.SearchField('intro', boost=0.6),
        index.SearchField('body', boost=0.5),
        index.SearchField('seo_title', boost=1.727),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('thumb'),
        FieldPanel('intro'),
        FieldPanel('body'),
    ]

    @property
    def blog_date(self):
        return self.first_published_at

    @property
    def thumbnail_set(self):
        return self.rendition_set(
            self.thumb,
            TFRenditionGroup.base
            | {
                'featured/large': 'fill-740x324',
                'featured/medium': 'fill-316x178|jpegquality-75',
            },
        )

    api_fields = [
        APIField('body'),
        APIField('intro'),
        APIField('blog_date'),
        APIField('thumbnail_set'),
        # APIField(
        #     'authors'
        # ),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]
