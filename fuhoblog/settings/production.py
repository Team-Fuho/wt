from .base import *  # noqa: F403

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

if SECRET_KEY == '':  # noqa: F405
    print('no SECRET_KEY env')
    exit(1)

DATABASES = DATABASES  # noqa: F405
WAGTAILSEARCH_BACKENDS = WAGTAILSEARCH_BACKENDS  # noqa: F405

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
    from .local import * # type: ignore  # noqa: F403
except ImportError:
    pass
