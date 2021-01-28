from django.shortcuts import render
from django.http import HttpResponse

from .models import Member, Alumnus

# Create your views here.

def members(request):
    context = {
        'finalYearCoordinators' : Member.objects.filter(position='Coordinator', year=4),
        'thirdYearCoordinators' : Member.objects.filter(position='Coordinator', year=3),
        'finalYear' : Member.objects.filter(year=4).exclude(position='Coordinator'),
        'thirdYear' : Member.objects.filter(year=3).exclude(position='Coordinator'),
        'secondYear' : Member.objects.filter(year=2),
        'firstYear' : Member.objects.filter(year=1)
    }
    for member in context['finalYearCoordinators']:
        member.position = '.'
    return render(request, 'members.html', context)

def alumni(request):
    context = {
        'alumni' : Alumnus.objects.all()
    }
    return render(request, 'alumni.html', context)
