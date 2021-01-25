from django.shortcuts import render
from django.http import HttpResponse

from .models import Member

# Create your views here.

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
