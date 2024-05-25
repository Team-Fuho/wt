from .base import *

import os
from urllib.parse import urlparse

DEBUG = False

if SECRET_KEY == '':
    print('no SECRET_KEY env')
    exit(1)

DATABASES = DATABASES
WAGTAILSEARCH_BACKENDS = WAGTAILSEARCH_BACKENDS

if os.environ.get('DATABASE') is not None:
    try:
        DATABASE_ENVIRON = urlparse(os.environ['DASTABASE'])
        if DATABASE_ENVIRON.scheme == 'mysql':
            DATABASES |= {
                'default': {
                    'ENGINE': 'django.db.backends.mysql',
                    'NAME': os.environ['MYSQL_DATABASE'],
                    'USER': os.environ['MYSQL_PASSWORD'],
                    'PASSWORD': os.environ['MYSQL_PASSWORD'],
                    'HOST': os.environ['MYSQL_HOST'],
                    'PORT': os.environ['MYSQL_PORT'],
                },
            }
        else:
            print('DATABASE environment unknown scheme', DATABASE_ENVIRON.scheme)
    except ValueError:
        print('DATABASE environment variable invalid')
else:
    print('Did not tried using DATABASE despite tried to load PRODUCTION config')


if os.environ['OPENSEARCH_HOST'] is not None:
    WAGTAILSEARCH_BACKENDS = {
        'default': {
            'BACKEND': 'wagtail.search.backends.elasticsearch7',
            'URLS': [os.environ['OPENSEARCH_HOST']],
            'INDEX': 'blog',
            'TIMEOUT': 5,
            'OPTIONS': {},
            'INDEX_SETTINGS': {},
        }
    }
else:
    print('Did not tried using OPENSEARCH despite tried to load PRODUCTION config')

ALLOWED_HOSTS = ['*']

try:
    from .local import *
except ImportError:
    pass
