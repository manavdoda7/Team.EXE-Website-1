from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('base', views.base, name='base'),
    path('aboutus', views.aboutus, name='aboutus'),
]