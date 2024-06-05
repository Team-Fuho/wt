import datetime
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from django.db import models

from wagtail.images.models import Image, AbstractImage, AbstractRendition


class TFFuncGroup(Page):
    label = models.CharField(max_length=255, unique=True)
    content_panels = Page.content_panels + [
        FieldPanel('label'),
    ]
    api_fields = []


class TFImage(AbstractImage):
    id = models.AutoField(primary_key=True)

    created_at = models.DateTimeField(
        verbose_name=('created at'), auto_now_add=False, db_index=True
    )

    # To add a caption field:
    # caption = models.CharField(max_length=255, blank=True)

    admin_form_fields = (
        Image.admin_form_fields
        + (
            # Then add the field names here to make them appear in the form:
            # 'caption',
        )
    )

    def save(self, *args, **kwargs):
        """On save, update timestamps"""
        if not self.id and not self.created_at:
            self.created_at = kwargs.get('created_at') or datetime.datetime.now()
        return super().save(*args, **kwargs)


class TFRendition(AbstractRendition):
    id = models.AutoField(primary_key=True)
    image = models.ForeignKey(
        TFImage, on_delete=models.CASCADE, related_name='renditions'
    )

    class Meta:
        unique_together = (('image', 'filter_spec', 'focal_point_key'),)
