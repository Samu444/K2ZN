#from django.shortcuts import render

# Create your views here.
##from django.http import HttpResponse

##def index(request):
    ##return HttpResponse("LMS Backend is working!")
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, this is the index page!")

class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer