from django.db import models


# Create your models here.

class Blog(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField

    def __str__(self):
        return self.title
