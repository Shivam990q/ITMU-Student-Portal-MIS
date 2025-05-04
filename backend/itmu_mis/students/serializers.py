from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    """Serializer for the Student model."""
    full_name = serializers.CharField(source='user.get_full_name', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)
    
    class Meta:
        model = Student
        fields = [
            'id', 'full_name', 'email', 'registration_number', 'roll_number',
            'date_of_birth', 'gender', 'blood_group', 'category', 'aadhar_number',
            'address', 'phone_number', 'alternative_phone', 'father_name',
            'father_occupation', 'father_phone', 'mother_name', 'mother_occupation',
            'mother_phone', 'guardian_name', 'guardian_phone', 'batch', 'program',
            'admission_date', 'profile_picture'
        ]
        read_only_fields = ['id', 'registration_number', 'roll_number', 'admission_date', 'batch', 'program'] 