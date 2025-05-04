from django.urls import path
from . import views

app_name = 'faculty'

urlpatterns = [
    # Faculty URLs will be defined here
    path('', views.faculty_root, name='faculty-root'),
] 