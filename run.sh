export DJANGO_SETTINGS_MODULE="fuhoblog.settings.production"
rm -rv static
python manage.py collectstatic
python manage.py migrate --noinput
gunicorn fuhoblog.wsgi:application
# optional, if on windows
# waitress-serve --listen=127.0.0.1:5000 fuhoblog.wsgi:application