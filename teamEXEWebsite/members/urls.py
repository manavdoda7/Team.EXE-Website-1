from django.urls import path
from . import views

urlpatterns = [
    path('members', views.members, name='members'),
    path('alumni', views.alumni, name='alumnus'),
]