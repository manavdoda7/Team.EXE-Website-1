from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse

from .models import Project, Event, Workshop

# Create your views here.

def projects(request):
    context = {
        'projects': Project.objects.all()
    }
    return render(request, 'projects.html', context)

def base(request):
    return render(request, 'activities_base.html')

def events(request):
    context = {
        'events': Event.objects.all()
    }
    return render(request, 'events.html', context)

def workshops(request):
    context = {
        'workshops': Workshop.objects.all()
    }
    return render(request, 'workshops.html', context)
