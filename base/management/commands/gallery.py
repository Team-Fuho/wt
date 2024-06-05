from os import makedirs
from os.path import join as pathjoin, getsize, exists
from shutil import copy

from django.core.management.base import BaseCommand, CommandError
from gallery.models import Picture
from csv import reader as csvreader
from PIL import Image as ImageParser

from base.models import TFFuncGroup, TFImage

from hashlib import sha1

import datetime

from django.conf import settings
from django.utils import timezone


def sha1_file(path: str) -> str:
    with open(path, 'rb') as bfs:
        return sha1(bfs.read()).hexdigest()


class Command(BaseCommand):
    help = 'Migrate the old gallery format'

    def add_arguments(self, parser):
        parser.add_argument('datadir', type=str)
        parser.add_argument('fngroup', type=str)

    def handle(self, *args, **options):
        branch = TFFuncGroup.objects.get(label=options['fngroup'])
        makedirs('media/original_images', exist_ok=True)
        for i, r in enumerate(
            csvreader(
                open(pathjoin(options['datadir'], 'data.csv'), 'r', encoding='utf-8')
            )
        ):
            associated_image_name = r[0] + '.' + r[1].split('/')[-1]
            associated_image = pathjoin(
                options['datadir'], 'images/', associated_image_name
            )
            magika = ImageParser.open(associated_image)
            if magika.format in ['JPEG', 'PNG']:
                w, h = magika.size
                magika.close()
                size = getsize(associated_image)
                target_image = pathjoin(
                    './media/original_images/', associated_image_name
                )
                if not exists(target_image):
                    copy(
                        associated_image,
                        target_image,
                    )
                image = TFImage(
                    title=r[2],
                    width=w,
                    height=h,
                    created_at=datetime.datetime.fromtimestamp(
                        int(r[3]), tz=timezone.get_fixed_timezone(+7)
                    ),
                    file_size=size,
                    file_hash=sha1_file(associated_image),
                    file='original_images/' + associated_image_name,
                )
                image.save()
                pic = Picture(title=r[2], cap=r[4], image=image.get_indexed_instance())
                # pic.save()
                branch.add_child(instance=pic)
            else:
                print(associated_image.name, 'invalid')

        # page = Picture(id=4, title='geck', content_type='gallery.Picture')
        # branch.add_child(instance=page)
