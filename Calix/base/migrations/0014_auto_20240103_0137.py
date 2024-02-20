# Generated by Django 3.2.7 on 2024-01-03 09:37

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_auto_20240101_0846'),
    ]

    operations = [
        migrations.AddField(
            model_name='pins',
            name='numb',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='pins',
            name='expiration_date',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 2, 9, 37, 22, 792585, tzinfo=utc), null=True),
        ),
    ]