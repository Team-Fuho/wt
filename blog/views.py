from django.shortcuts import render

# Create your views here.
from wagtail.models import Page
from wagtail_headless_preview.models import HeadlessMixin


class BlogPage(HeadlessMixin, Page):
    pass