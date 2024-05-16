from .base import *

DEBUG = False

ENV_KEYS = ['DB_NAME', 'DB_HOST', 'DB_PORT', 'DB_PASS', 'DB_USER']
ENV_VARS = list(map(os.environ.get, ENV_KEYS))

DATABASES = DATABASES

if all(
    not k.startswith('DB_') or ENV_VARS[i] is not None for i, k in enumerate(ENV_KEYS)
):
    print('Using MYSQL instead')
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': ENV_VARS[0],
            'USER': ENV_VARS[4],
            'PASSWORD': ENV_VARS[3],
            'HOST': ENV_VARS[1],
            'PORT': ENV_VARS[2],
        },
    }

try:
    from .local import *
except ImportError:
    pass
