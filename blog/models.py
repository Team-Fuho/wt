from django.db import models
from django import forms
from django.utils import timezone

from wagtail.models import Page
from wagtail.fields import StreamField
from wagtail.admin.panels import (
    FieldPanel,
    ObjectList,
    MultiFieldPanel,
    MultipleChooserPanel,
    InlinePanel,
    TabbedInterface,
)
from wagtail.api import APIField
from wagtail.search import index
from wagtail_headless_preview.models import HeadlessPreviewMixin

from base.models import TFImage, TFRenditionGroup, TFAuthor
from base.blocks import TFStreamBlocks

from modelcluster.fields import ParentalKey, ParentalManyToManyField

# from wagtail_wordpress_import.blocks import WPImportStreamBlocks
# from wagtail_wordpress_import.models import WPImportedPageMixin

from grapple.models import (
    GraphQLString,
    GraphQLStreamfield,
    GraphQLImage,
    GraphQLForeignKey,
)
from grapple.helpers import register_paginated_query_field

@register_paginated_query_field("blog")
class BlogPage(
    # WPImportedPageMixin,
    HeadlessPreviewMixin,
    Page,
    TFRenditionGroup,
):
    thumb = models.ForeignKey(
        TFImage,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    # date = models.DateField('date', default=timezone.now)
    # authors = ParentalManyToManyField(TFAuthor, blank=True)

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
        MultiFieldPanel(
            [
                MultipleChooserPanel(
                    'authors', label='Author', chooser_field_name='author'
                ),
            ]
        ),
        FieldPanel('intro'),
        FieldPanel('body'),
    ]

    promote_panels = (
        [
            # FieldPanel('date', read_only=True),
            FieldPanel('thumb'),
        ]
        + Page.promote_panels
        + []
    )

    settings_panels = Page.settings_panels + []

    edit_handler = TabbedInterface(
        [
            ObjectList(content_panels, heading='Content'),
            ObjectList(promote_panels, heading='Promote'),
            ObjectList(settings_panels, heading='Settings', classname='settings'),
            # ObjectList(WPImportedPageMixin.wordpress_panels, heading='Debug'),
        ]
    )

    @property
    def blog_date(self):
        return self.first_published_at

    @property
    def thumbnail_set(self):
        return (
            self.rendition_set(
                self.thumb,
                TFRenditionGroup.base
                | {
                    'featured/large': 'fill-740x324',
                    'featured/medium': 'fill-316x178|jpegquality-75',
                },
            )
            if self.thumb is not None
            else []
        )

    api_fields = [
        APIField('body'),
        APIField('intro'),
        APIField('blog_date'),
        APIField('thumbnail_set'),
        APIField(
            'authors'
        ),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]

    graphql_fields = [
        GraphQLStreamfield('body'),
        GraphQLForeignKey('involved', "blog.BlogInvolvementInfo"),
        GraphQLString('intro'),
        GraphQLString('blog_date'),
        GraphQLImage('thumb'),
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


class BlogInvolvementInfo(models.Model):
    blog = ParentalKey(
        'blog.BlogPage',
        on_delete=models.CASCADE,
        related_name='authors',
        null=False,
        blank=False,
    )

    author = models.OneToOneField(
        TFAuthor,
        null=False,
        blank=False,
        on_delete=models.DO_NOTHING,
        unique=True,
        default=TFAuthor,
    )

    graphql_fields=[
        GraphQLForeignKey('author', TFAuthor)
    ]
