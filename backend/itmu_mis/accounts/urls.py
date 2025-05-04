from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('profile/', views.UserProfileView.as_view(), name='profile'),
    path('change-password/', views.ChangePasswordView.as_view(), name='change-password'),
] 