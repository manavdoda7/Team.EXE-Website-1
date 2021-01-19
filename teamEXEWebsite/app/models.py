from django.db import models

# Create your models here.

class PreviousEvent(models.Model):
    title = models.CharField(max_length=100)
    image = models.CharField(max_length=500)
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.title

positions = (
    ('Coordinator', 'Coordinator'),
    ('Executive Member', 'Executive Member'),
    ('Alumnus', 'Alumnus'),
    ('Volunteer', 'Volunteer')
)

class Member(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100, choices=positions, db_index=True)
    tagline = models.CharField(max_length=300)
    imageURL = models.URLField(max_length=200)
    github = models.URLField(max_length=200)
    linkedin = models.URLField(max_length=200)

    def __str__(self):
        return self.position + ' - ' + self.name
