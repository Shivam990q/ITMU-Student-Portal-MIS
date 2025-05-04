from rest_framework import permissions

class IsStudent(permissions.BasePermission):
    """
    Custom permission to only allow students to access their data.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'STUDENT'

class IsFaculty(permissions.BasePermission):
    """
    Custom permission to only allow faculty members to access.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'FACULTY'

class IsStaff(permissions.BasePermission):
    """
    Custom permission to only allow staff members to access.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'STAFF'

class IsAdminUser(permissions.BasePermission):
    """
    Custom permission to only allow admin users to access.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'ADMIN'

class IsOwnerOrStaff(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object or staff to access it.
    """
    def has_object_permission(self, request, view, obj):
        # Staff and superusers can access any object
        if request.user.is_staff or request.user.is_superuser:
            return True
            
        # Instance must have an attribute named `user` or `owner`
        return (hasattr(obj, 'user') and obj.user == request.user) or \
               (hasattr(obj, 'owner') and obj.owner == request.user) 