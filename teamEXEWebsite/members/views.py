from django.shortcuts import render
from django.http import HttpResponse

from .models import Member, Alumnus

# Create your views here.

def members(request):
    context = {
        'coordinators' : Member.objects.filter(position='Coordinator'),
        'finalYear' : Member.objects.filter(year=4),
        'thirdYear' : Member.objects.filter(year=3).exclude(position='Coordinator'),
        'secondYear' : Member.objects.filter(year=2),
        'firstYear' : Member.objects.filter(year=1)
    }
    return render(request, 'members.html', context)

def alumni(request):
    context = {
        'alumni' : Alumnus.objects.all()
    }
    return render(request, 'alumni.html', context)
