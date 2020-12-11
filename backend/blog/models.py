from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Blog(models.Model):
    author = models.ForeignKey(User, related_name="blogs", on_delete=models.CASCADE, 
    null=True)
    title = models.CharField(max_length=100)
    text = models.TextField()
    category = models.CharField(max_length=50)
    date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='images/', blank=True)

    def __str__(self):
        return self.title

class Profile(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    join_date = models.DateTimeField(auto_now_add=True)
    primary_interest = models.CharField(max_length=100)
    bio = models.TextField()
    personal_image = models.ImageField(upload_to='images/', blank=True)

    def __str__(self):
        return self.title
