# Generated by Django 3.1.5 on 2021-01-11 20:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PreviousEvents',
            new_name='PreviousEvent',
        ),
    ]