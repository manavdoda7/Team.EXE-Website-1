from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def projects(request):
    return render(request, 'projects.html')

def base(request):
    return render(request, 'activities_base.html')

def events(request):
    return render(request, 'events.html')

def workshops(request):
    return render(request, 'workshops.html')
