# Generated by Django 4.2.13 on 2024-05-22 17:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    replaces = [
        ('blog', '0002_alter_blogpage_thumb'),
    ]

    dependencies = [
        ('blog', '0001_testphase_01'),
        ('wagtailimages', '0026_delete_uploadedimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpage',
            name='thumb',
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name='+',
                to='wagtailimages.image',
            ),
        ),
    ]
