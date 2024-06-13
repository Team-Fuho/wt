from django.db import models
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.fields import StreamField
from wagtail.admin.panels import (
    FieldPanel,
    ObjectList,
    TabbedInterface,
)
from wagtail.api import APIField
from wagtail.search import index

from base.models import TFImage, TFRenditionGroup
from base.blocks import TFStreamBlocks

# from wagtail_wordpress_import.blocks import WPImportStreamBlocks
# from wagtail_wordpress_import.models import WPImportedPageMixin


class BlogPage(
    # WPImportedPageMixin,
    Page,
    TFRenditionGroup,
):
    thumb = models.ForeignKey(
        TFImage,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='+',
    )

    intro = models.CharField(max_length=250, blank=True)
    # body = RichTextField(blank=True)
    # body = StreamField(WPImportStreamBlocks)
    body = StreamField(TFStreamBlocks)
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

    edit_handler = TabbedInterface(
        [
            ObjectList(content_panels, heading='Content'),
            ObjectList(Page.promote_panels, heading='Promote'),
            ObjectList(Page.settings_panels, heading='Settings', classname='settings'),
            # ObjectList(WPImportedPageMixin.wordpress_panels, heading='Debug'),
        ]
    )

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

    # def import_wordpress_data(self, data):
    #     # Wagtail page model fields
    #     self.title = data['title']
    #     self.slug = data['slug']
    #     self.first_published_at = data['first_published_at']
    #     self.last_published_at = data['last_published_at']
    #     self.latest_revision_created_at = data['latest_revision_created_at']
    #     self.search_description = data['search_description']

    #     # debug fields
    #     self.wp_post_id = data['wp_post_id']
    #     self.wp_post_type = data['wp_post_type']
    #     self.wp_link = data['wp_link']
    #     self.wp_raw_content = data['wp_raw_content']
    #     self.wp_block_json = data['wp_block_json']
    #     self.wp_processed_content = data['wp_processed_content']
    #     self.wp_normalized_styles = data['wp_normalized_styles']
    #     self.wp_post_meta = data['wp_post_meta']

    #     # own model fields
    #     self.body = data['body']
