# Generated by Django 4.0.3 on 2022-04-20 23:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_feed_anonymous_alter_feed_emoji_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feed',
            name='content',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
