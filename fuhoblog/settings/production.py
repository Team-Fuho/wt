from .base import *  # noqa: F403

from copy import deepcopy
import os

import sentry_sdk

sentry_dsn = os.environ.get('SENTRY_DSN', '').strip().strip('"').strip("'")

if sentry_dsn:
    sentry_sdk.init(
        dsn=sentry_dsn,
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

opensearch_host = os.environ.get('OPENSEARCH_HOST')

if opensearch_host:
    WAGTAILSEARCH_BACKENDS = {
        'default': {
            'BACKEND': 'wagtail.search.backends.elasticsearch7',
            'URLS': [opensearch_host],
            'INDEX': 'fuhoblog',
            'TIMEOUT': 5,
            'OPTIONS': {},
            'INDEX_SETTINGS': {},
        }
    }

ALLOWED_HOSTS = [
    host.strip() for host in os.environ.get('ALLOWED_HOSTS', '*').split(',')
    if host.strip()
]

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
USE_X_FORWARDED_HOST = True

aws_access_key_id = os.environ.get('AWS_ACCESS_KEY_ID')
aws_secret_access_key = os.environ.get('AWS_SECRET_ACCESS_KEY')
aws_storage_bucket_name = os.environ.get('AWS_STORAGE_BUCKET_NAME')
aws_s3_endpoint_url = os.environ.get('AWS_S3_ENDPOINT_URL')
aws_s3_custom_domain = os.environ.get('AWS_S3_CUSTOM_DOMAIN')

if aws_access_key_id and aws_secret_access_key and aws_storage_bucket_name:
    AWS_ACCESS_KEY_ID = aws_access_key_id
    AWS_SECRET_ACCESS_KEY = aws_secret_access_key
    AWS_STORAGE_BUCKET_NAME = aws_storage_bucket_name
    AWS_S3_ENDPOINT_URL = aws_s3_endpoint_url
    AWS_S3_REGION_NAME = os.environ.get('AWS_S3_REGION_NAME', 'auto')
    AWS_S3_ADDRESSING_STYLE = os.environ.get('AWS_S3_ADDRESSING_STYLE', 'path')
    AWS_DEFAULT_ACL = None
    AWS_S3_FILE_OVERWRITE = False
    AWS_QUERYSTRING_AUTH = (
        os.environ.get('AWS_QUERYSTRING_AUTH', 'False') == 'True'
    )
    AWS_S3_CUSTOM_DOMAIN = aws_s3_custom_domain

    STORAGES = deepcopy(STORAGES)  # noqa: F405
    STORAGES['default'] = {
        'BACKEND': 'storages.backends.s3.S3Storage',
        'OPTIONS': {
            'location': 'media',
        },
    }

    if AWS_S3_CUSTOM_DOMAIN:
        MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/media/'
    elif AWS_S3_ENDPOINT_URL:
        MEDIA_URL = (
            f"{AWS_S3_ENDPOINT_URL.rstrip('/')}/{AWS_STORAGE_BUCKET_NAME}/media/"
        )

try:
    from .local import * # type: ignore  # noqa: F403
except ImportError:
    pass
