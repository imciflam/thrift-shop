# Generated by Django 2.2.1 on 2019-05-13 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0006_lead_filedocument'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='fileDocument',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
