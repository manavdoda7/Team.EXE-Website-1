from django.urls import path
from . import views

urlpatterns = [
    path('base', views.base, name='base'),
    path('events', views.events, name='events'),
    path('projects', views.projects, name='projects'),
    path('workshops', views.workshops, name='workshops'),
    
]