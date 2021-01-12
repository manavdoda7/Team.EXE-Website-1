from django.db import models

# Create your models here.

class PreviousEvent(models.Model):
    title = models.CharField(max_length=100)
    image = models.CharField(max_length=500)
    text = models.CharField(max_length=1000)

    def __str__(self):
        return self.title