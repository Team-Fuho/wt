# # get_or_save_image is a convenience function provided in the package
# from wagtail_wordpress_import.block_builder_defaults import get_or_save_image
# from .models import BlogPage

# def header_image_processor(imported_pages: BlogPage, data_tag, items_cache):
#     """
#     imported_pages:
#         Is a specific() page model queryset of all imported pages.
#     data_tag:
#         Is the value of the `DATA_TAG` key from the configuration above.
#     items_cache:
#         Is a list of dictionaries, one for each item in the XML file.
#     """

#     # See note above about leading _ and : characters in the XML value
#     lookup = f'wp_post_meta__{data_tag}'

#     for attachment in items_cache:
#         # The id of the cached item used in the filter
#         thumbnail_id = attachment.get('wp:post_id')

#         # Filter the imported_pages for only pages that include the
#         # matching thumbnail_id in the wp_post_meta field
#         pages = imported_pages.filter(**{lookup: thumbnail_id})

#         if pages.exists():
#             # guid is the url of the image to fetch, the get_or_save_image()
#             # function will fetch the image if it doesn't exist
#             image = get_or_save_image(attachment.get('guid'))

#             # update header_image field in all of the pages in
#             # the queryset with the image object
#             pages.update(thumb=image)

#             # the print statement below is optional
#             # and will show the progress in the console
#             print('Attaching header images to pages:', pages)
