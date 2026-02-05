from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Book(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,related_name="books",default="")
    title=models.CharField(max_length=100)
    author=models.CharField(max_length=100)
    price=models.IntegerField()

    def __str__(self):
        return self.title