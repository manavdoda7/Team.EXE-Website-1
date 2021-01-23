from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=100)
    contributors = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    image = models.URLField(max_length=255)
    github = models.URLField(max_length=255)
    link = models.URLField(max_length=255)

    def __str__(self):
        return self.title

class Event(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    time = models.DateTimeField()
    image = models.URLField(max_length=255)
    link = models.URLField(max_length=255)

    def __str__(self):
        return self.title

class Workshop(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    time = models.DateTimeField()
    link = models.URLField(max_length=255)
    image = models.URLField(max_length=255)

    def __str__(self):
        return self.title
