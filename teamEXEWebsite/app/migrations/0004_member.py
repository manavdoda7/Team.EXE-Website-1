# Generated by Django 3.1.4 on 2021-01-19 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_previousevent_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('position', models.CharField(choices=[('Co', 'Coordinator'), ('Ex', 'Executive Member'), ('Al', 'Alumnus'), ('Vo', 'Volunteer')], max_length=100)),
                ('tagline', models.CharField(max_length=300)),
                ('imageURL', models.URLField()),
                ('github', models.URLField()),
                ('linkedin', models.URLField()),
            ],
        ),
    ]
