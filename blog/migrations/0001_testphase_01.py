# Generated by Django 4.2.13 on 2024-05-15 16:12

from django.db import migrations, models
import django.db.models.deletion
import wagtail.fields


class Migration(migrations.Migration):
    replaces = [
        ('blog', '0001_initial'),
        ('blog', '0002_blogpage_delete_blogindexpage'),
        ('blog', '0003_blogpage_thumb'),
    ]

    dependencies = [
        ('wagtailcore', '0083_workflowcontenttype'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPage',
            fields=[
                (
                    'page_ptr',
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to='wagtailcore.page',
                    ),
                ),
                ('date', models.DateField(verbose_name='Post date')),
                ('intro', models.CharField(max_length=250)),
                ('body', wagtail.fields.RichTextField(blank=True)),
                (
                    'thumb',
                    models.ImageField(
                        blank=True, upload_to='', verbose_name='Thumbnail'
                    ),
                ),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
    ]
