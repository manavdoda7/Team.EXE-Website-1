from django.shortcuts import render
from django.http import HttpResponse

from .models import PreviousEvent, Member

# Create your views here.

def index(request):
    context = {
        'previousEvents' : PreviousEvent.objects.all()
        
    }
    return render(request, 'index.html', context)

def base(request):
    return render(request, 'base.html')

def aboutus(request):
    return render(request, 'aboutus.html')

def members(request):
    context = {
        'coordinators' : Member.objects.filter(position='Coordinator'),
        'executiveMembers' : Member.objects.filter(position='Executive Member')
    }
    return render(request, 'members.html', context)

def alumni(request):
    context = {
        'alumni' : Member.objects.filter(position='Alumnus')
    }
    return render(request, 'alumni.html', context)

def activities(request):
    return render(request, 'activities.html')