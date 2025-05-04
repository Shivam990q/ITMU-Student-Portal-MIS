from django.urls import path
from . import views

app_name = 'attendance'

urlpatterns = [
    # Attendance URLs will be defined here
    path('', views.attendance_root, name='attendance-root'),
] 