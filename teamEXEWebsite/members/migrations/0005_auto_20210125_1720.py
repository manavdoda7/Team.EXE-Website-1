# Generated by Django 3.1.4 on 2021-01-25 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0004_alumnus'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='position',
            field=models.CharField(choices=[('.', '.'), ('Coordinator', 'Coordinator'), ('Executive Member', 'Executive Member'), ('Volunteer', 'Volunteer')], db_index=True, default='.', max_length=100),
        ),
    ]
