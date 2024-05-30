from wagtail.images.formats import Format, register_image_format

# how is this even working
register_image_format(
    Format('thumbnail', 'Thumbnail', 'richtext-image thumbnail', 'max-120x120')
)
