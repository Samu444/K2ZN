from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLES = (
        ("student", "Student"),
        ("instructor", "Instructor"),
        ("facilitator","Facilitator")
    )
    role = models.CharField(max_length=20, choices=ROLES, default="student")

    def __str__(self):
        return f"{self.username} ({self.role})"
