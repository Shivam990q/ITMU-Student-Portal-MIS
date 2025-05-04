from django.urls import path
from . import views

app_name = 'students'

urlpatterns = [
    path('', views.StudentListView.as_view(), name='student-list'),
    path('<int:pk>/', views.StudentDetailView.as_view(), name='student-detail'),
    path('profile/', views.StudentProfileView.as_view(), name='student-profile'),
] 