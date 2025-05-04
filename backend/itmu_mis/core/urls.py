"""
Main URL Configuration for ITMU MIS Project
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Swagger/OpenAPI schema setup
schema_view = get_schema_view(
   openapi.Info(
      title="ITMU MIS API",
      default_version='v1',
      description="API for ITM University Management Information System",
      terms_of_service="https://www.itmuniversity.ac.in/terms/",
      contact=openapi.Contact(email="admin@itmuniversity.ac.in"),
      license=openapi.License(name="ITM University License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API documentation
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    
    # API endpoints
    path('api/v1/', include('api.urls')),
    
    # Authentication
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    
    # App URLs
    path('api/v1/accounts/', include('accounts.urls')),
    path('api/v1/students/', include('students.urls')),
    path('api/v1/faculty/', include('faculty.urls')),
    path('api/v1/courses/', include('courses.urls')),
    path('api/v1/attendance/', include('attendance.urls')),
    path('api/v1/results/', include('results.urls')),
    path('api/v1/payments/', include('payments.urls')),
    path('api/v1/documents/', include('documents.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 