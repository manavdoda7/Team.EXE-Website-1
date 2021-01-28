from django.shortcuts import render
from django.http import HttpResponse

from .models import PreviousEvent
from activities.models import Event, Workshop
from itertools import chain

# Create your views here.

def index(request):
    events = Event.objects.all()
    workshop = Workshop.objects.all()

    context = {
        'previousEvents' : PreviousEvent.objects.all(),
        'upcommingEvents': sorted(chain(events, workshop), key=lambda ins: ins.time)
    }

    return render(request, 'index.html', context)

def base(request):
    return render(request, 'base.html')

def aboutus(request):
    return render(request, 'aboutus.html')

