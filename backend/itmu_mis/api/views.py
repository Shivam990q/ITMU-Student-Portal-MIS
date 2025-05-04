from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

@api_view(['GET'])
def api_root(request, format=None):
    """
    Root endpoint for the API with links to all available endpoints.
    """
    return Response({
        'accounts': reverse('accounts:profile', request=request, format=format),
        'students': reverse('api:api-root', request=request, format=format),
        'faculty': reverse('api:api-root', request=request, format=format),
        'courses': reverse('api:api-root', request=request, format=format),
        'attendance': reverse('api:api-root', request=request, format=format),
        'results': reverse('api:api-root', request=request, format=format),
        'payments': reverse('api:api-root', request=request, format=format),
        'documents': reverse('api:api-root', request=request, format=format),
    }) 