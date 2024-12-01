# wagtail - the singing cms

A pretty simple `wagtail` setup for simple kind of JUST BLOGGING, and scaling under docker.

## Server

### Install

- You may find yourself struggle with snake-engine. Don't worry, because Docker shipment is supported.
  > Run the container (testing purpose)
  >
  > ```sh
  > docker run ghcr.io/team-fuho/wt:main -p 8000:8000
  > ```
  >
  > To run in production with non emphemeral storage, here is the required entry that you need to bind on.
  >
  > - If there is no `DATABASE_URL` defined, it will rely on `/app/db.sqlite3`
  > - also if there is no [django-storage](https://django-storages.readthedocs.io/en/latest/) env defined correctly, it uses `/app/media`
  >   Configure properly
  > - `DATABASE_URL` is recommended. parsed by [dj-database-url](https://pypi.org/project/dj-database-url/)
- Though, for a portable setup, I recommend
  > ```sh
  > uv venv
  > ./.venv/Scripts/activate # on windows
  > ./.venv/bin/activate # on *nix
  > uv sync
  > python ./manage.py createsuperuser # wagtail initial setup (to add admin)
  > python ./manage.py runserver # wagtail default behaviour
  > ```

## Client

Here is the example `listBlog` query

```json
{
  "pagination": {
    "total": 1,
    "count": 1,
    "perPage": 10,
    "currentPage": 1,
    "prevPage": null,
    "nextPage": null,
    "totalPages": 1
  },
  "items": [
    {
      "id": "3",
      "slug": "hello-world",
      "title": "Hello World",
      "seoTitle": "Hello World",
      "thumb": null
    }
  ]
}
```
