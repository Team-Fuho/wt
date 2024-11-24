FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    WAGTAIL_ENV=production \
    PORT=8000

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    default-libmysqlclient-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

RUN pip install uv

RUN uv venv

COPY pyproject.toml .
COPY uv.lock ./

RUN . .venv/bin/activate && uv sync --all-extras

COPY . .

RUN . .venv/bin/activate && python manage.py collectstatic --noinput

RUN adduser --disabled-password --no-create-home wagtailuser
USER wagtailuser

EXPOSE 8000

CMD . .venv/bin/activate && \
    python manage.py migrate --noinput && \
    .venv/bin/gunicorn --bind 0.0.0.0:8000 \
    --workers 4 --worker-class uvicorn.workers.UvicornWorker \
    --max-requests 1000 --max-requests-jitter 50 --access-logfile - --error-logfile - \
    --timeout 120 fuhoblog.wsgi:application
