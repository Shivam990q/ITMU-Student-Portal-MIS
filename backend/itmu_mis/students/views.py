from rest_framework import generics, permissions
from .models import Student
from .serializers import StudentSerializer
from ..accounts.permissions import IsStudent

class StudentListView(generics.ListAPIView):
    """
    List all students.
    Only accessible by staff and admin users.
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAdminUser]

class StudentDetailView(generics.RetrieveAPIView):
    """
    Retrieve a student.
    Only accessible by staff, admin users, and the student themselves.
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAdminUser]

class StudentProfileView(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update the authenticated student's profile.
    """
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAuthenticated, IsStudent]
    
    def get_object(self):
        return self.request.user.student_profile 