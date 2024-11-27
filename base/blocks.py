from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock
from grapple.helpers import register_streamfield_block

from grapple.models import (
    GraphQLImage,
    GraphQLString,
    GraphQLForeignKey,
)


@register_streamfield_block
class HeadingBlock(blocks.StructBlock):
    text = blocks.CharBlock(classname='title')
    importance = blocks.ChoiceBlock(
        choices=(
            ('h1', 'H1'),
            ('h2', 'H2'),
            ('h3', 'H3'),
            ('h4', 'H4'),
            ('h5', 'H5'),
            ('h6', 'H6'),
        ),
        default='h1',
    )

    graphql_fields = [GraphQLString('text'), GraphQLString('importance')]

    class Meta:
        icon = 'title'
        template = 'base/heading_block.html'


@register_streamfield_block
class ImageBlock(blocks.StructBlock):
    image = ImageChooserBlock()
    caption = blocks.CharBlock(required=False)
    link = blocks.URLBlock(required=False)
    alignment = blocks.ChoiceBlock(
        choices=(
            ('left', 'Left'),
            ('right', 'Right'),
            ('center', 'Center'),
        ),
        default='left',
    )

    graphql_fields = [
        GraphQLImage('image'),
        GraphQLString('caption'),
        GraphQLString('link'),
        GraphQLString('alignment'),
    ]

    class Meta:
        icon = 'image'
        template = 'base/image_block.html'


@register_streamfield_block
class QuoteBlock(blocks.StructBlock):
    quote = blocks.CharBlock(form_classname='title')
    attribution = blocks.CharBlock(required=False)

    graphql_fields = [GraphQLString('quote'), GraphQLString('attribution')]

    class Meta:
        icon = 'openquote'
        template = 'base/quote_block.html'


@register_streamfield_block
class TFStreamBlocks(blocks.StreamBlock):
    rich_text = blocks.RichTextBlock()
    heading = HeadingBlock()
    image = ImageBlock()
    block_quote = QuoteBlock()
    raw_html = blocks.RawHTMLBlock()
