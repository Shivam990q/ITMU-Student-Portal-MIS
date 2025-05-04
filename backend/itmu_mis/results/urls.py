from django.urls import path
from . import views

app_name = 'results'

urlpatterns = [
    # Results URLs will be defined here
    path('', views.results_root, name='results-root'),
] 