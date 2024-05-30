from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField
from wagtail.search import index
from wagtail.images.models import Image

# keep the definition of BlogIndexPage model, and add the BlogPage model:


class BlogPage(Page):
    THUMB_RENDITIONS = {
        'featured/large': 'fill-740x324',
        'featured/medium': 'fill-316x178|jpegquality-75',
        'media/facebook': 'fill-1280x628',
        'media/x': 'fill-800x418',
    }
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
    def thumbnail_set(self) -> dict[str, str]:
        """
        Generate rendition set (might trouble api client though)
        """
        global THUMB_RENDITIONS

        return dict(
            (k, self.thumb.get_rendition(v).full_url)
            for k, v in THUMB_RENDITIONS.items()
        )

    api_fields = [
        APIField('body'),
        APIField('intro'),
        APIField('thumbnail_set'),
        # APIField(
        #     'authors'
        # ),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]       
