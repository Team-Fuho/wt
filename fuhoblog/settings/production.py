from .base import *

import os
from urllib.parse import urlparse

import sentry_sdk

if os.environ.get('SENTRY_DSN') is not None:
    sentry_sdk.init(
        dsn=os.environ.get('SENTRY_DSN'),
        # Set traces_sample_rate to 1.0 to capture 100%
        # of transactions for performance monitoring.
        traces_sample_rate=1.0,
    )

os.environ.setdefault('DJANGO_DEBUG', 'False')

DEBUG = False or (os.environ['DJANGO_DEBUG'] == 'True')

if SECRET_KEY == '':
    print('no SECRET_KEY env')
    exit(1)

DATABASES = DATABASES
WAGTAILSEARCH_BACKENDS = WAGTAILSEARCH_BACKENDS

if os.environ.get('DATABASE') is not None:
    try:
        DATABASE_ENVIRON = urlparse(os.environ['DATABASE'])
        if DATABASE_ENVIRON.scheme == 'mysql':
            DATABASES |= {
                'default': {
                    'ENGINE': 'django.db.backends.mysql',
                    'NAME': DATABASE_ENVIRON.path.replace('/', '') or 'wagtail',
                    'USER': DATABASE_ENVIRON.username or 'root',
                    'PASSWORD': DATABASE_ENVIRON.password or '',
                    'HOST': DATABASE_ENVIRON.hostname or 'localhost',
                    'PORT': int(DATABASE_ENVIRON.port or 3306) or 3306,
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
            'INDEX': 'fuhoblog',
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
