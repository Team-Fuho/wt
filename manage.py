#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_FORCEPROD', 'False')
    os.environ.setdefault(
        'DJANGO_SETTINGS_MODULE',
        'fuhoblog.settings.dev'
        if os.environ['DJANGO_FORCEPROD'] == 'False'
        else 'fuhoblog.settings.production',
    )

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
