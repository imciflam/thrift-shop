from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    city = models.CharField(max_length=100, blank=True)
    phoneNumber = models.CharField(max_length=100, blank=True)
    brand = models.CharField(max_length=100, blank=True)
    model = models.CharField(max_length=100, blank=True)
    photo = models.CharField(max_length=500, blank=True)
    color = models.CharField(max_length=500, blank=True)
    mileage = models.IntegerField(blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    engine = models.CharField(max_length=500, blank=True)
    transmission = models.CharField(max_length=500, blank=True)
    gearbox = models.CharField(max_length=500, blank=True)
    dateOfManufacture = models.CharField(max_length=500, blank=True)
    description = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
