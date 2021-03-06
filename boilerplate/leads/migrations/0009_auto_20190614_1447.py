# Generated by Django 2.2.1 on 2019-06-14 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0008_lead_notetext'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lead',
            old_name='documentCode',
            new_name='brand',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='documentStageCode',
            new_name='city',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='fileDocument',
            new_name='color',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='message',
            new_name='dateOfManufacture',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='noteText',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='email',
            new_name='model',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='name',
            new_name='phoneNumber',
        ),
        migrations.AddField(
            model_name='lead',
            name='engine',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='lead',
            name='gearbox',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='lead',
            name='mileage',
            field=models.IntegerField(blank=True, default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lead',
            name='photo',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='lead',
            name='transmission',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
