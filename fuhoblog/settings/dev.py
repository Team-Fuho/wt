from .base import *  # noqa: F403

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-2sk^h6l#_6@guv3ci^%@jj$%k31-i0j$c%5l9_@sp)i9t@s-=0'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*']

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

INSTALLED_APPS += []  # noqa: F405

try:
    from .local import *  # type: ignore  # noqa: F403
except ImportError:
    pass
