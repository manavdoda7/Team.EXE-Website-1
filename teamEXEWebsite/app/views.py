from django.shortcuts import render
from django.http import HttpResponse

from .models import PreviousEvent

# Create your views here.

def index(request):
    context = {
        'previousEvents' : PreviousEvent.objects.all()
        
    }
    return render(request, 'index.html', context)

def base(request):
    return render(request, 'base.html')