# Generated by Django 3.1.2 on 2021-01-25 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20210119_0725'),
    ]

    operations = [
        migrations.AddField(
            model_name='member',
            name='year',
            field=models.IntegerField(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], db_index=True, default=3),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='member',
            name='position',
            field=models.CharField(choices=[('', ''), ('Coordinator', 'Coordinator'), ('Executive Member', 'Executive Member'), ('Alumnus', 'Alumnus'), ('Volunteer', 'Volunteer')], db_index=True, max_length=100),
        ),
    ]