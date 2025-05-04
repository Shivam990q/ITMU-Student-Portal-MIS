from django.urls import path
from . import views

app_name = 'documents'

urlpatterns = [
    # Documents URLs will be defined here
    path('', views.documents_root, name='documents-root'),
] 