from django.urls import path
from . import views

app_name = 'payments'

urlpatterns = [
    # Payments URLs will be defined here
    path('', views.payments_root, name='payments-root'),
] 