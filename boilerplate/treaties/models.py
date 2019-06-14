from django.db import models 
from django.contrib.auth.models import User

# Create your models here.
class Treaty(models.Model):
    city = models.CharField(max_length=100, blank=True)
    phoneNumber = models.CharField(max_length=100, blank=True)
    brand = models.CharField(max_length=100, blank=True)
    model = models.CharField(max_length=100, blank=True)
    color = models.CharField(max_length=500, blank=True)
    mileage = models.IntegerField(blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    owner = models.ForeignKey(
    User, related_name="treaties", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
