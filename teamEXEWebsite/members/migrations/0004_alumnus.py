# Generated by Django 3.1.4 on 2021-01-25 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0003_auto_20210125_1714'),
    ]

    operations = [
        migrations.CreateModel(
            name='Alumnus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('imageURL', models.URLField()),
                ('github', models.URLField()),
                ('linkedin', models.URLField()),
            ],
        ),
    ]
