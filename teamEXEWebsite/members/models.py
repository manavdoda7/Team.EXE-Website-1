from django.db import models

# Create your models here.

positions = (
    ('', ''),
    ('Coordinator', 'Coordinator'),
    ('Executive Member', 'Executive Member'),
    ('Alumnus', 'Alumnus'),
    ('Volunteer', 'Volunteer')
)

years = (
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5)
)

class Member(models.Model):
    name = models.CharField(max_length=100)
    year = models.IntegerField(choices=years, db_index=True)
    position = models.CharField(max_length=100, choices=positions, db_index=True)
    tagline = models.CharField(max_length=300)
    imageURL = models.URLField(max_length=200)
    github = models.URLField(max_length=200)
    linkedin = models.URLField(max_length=200)

    def __str__(self):
        return str(self.year) + ' - ' + self.position + ' - ' + self.name
