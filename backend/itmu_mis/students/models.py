"""
Student models for ITMU MIS.
"""
from django.db import models
from django.conf import settings

class Student(models.Model):
    """Student model representing a student at ITM University."""
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
    
    BLOOD_GROUP_CHOICES = (
        ('A+', 'A Positive'),
        ('A-', 'A Negative'),
        ('B+', 'B Positive'),
        ('B-', 'B Negative'),
        ('O+', 'O Positive'),
        ('O-', 'O Negative'),
        ('AB+', 'AB Positive'),
        ('AB-', 'AB Negative'),
    )
    
    CATEGORY_CHOICES = (
        ('GEN', 'General'),
        ('OBC', 'Other Backward Class'),
        ('SC', 'Scheduled Caste'),
        ('ST', 'Scheduled Tribe'),
        ('EWS', 'Economically Weaker Section'),
    )
    
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='student_profile')
    registration_number = models.CharField(max_length=20, unique=True)
    roll_number = models.CharField(max_length=20, unique=True)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES, blank=True, null=True)
    category = models.CharField(max_length=3, choices=CATEGORY_CHOICES)
    aadhar_number = models.CharField(max_length=12, blank=True, null=True)
    address = models.TextField()
    phone_number = models.CharField(max_length=15)
    alternative_phone = models.CharField(max_length=15, blank=True, null=True)
    father_name = models.CharField(max_length=100)
    father_occupation = models.CharField(max_length=100, blank=True, null=True)
    father_phone = models.CharField(max_length=15, blank=True, null=True)
    mother_name = models.CharField(max_length=100)
    mother_occupation = models.CharField(max_length=100, blank=True, null=True)
    mother_phone = models.CharField(max_length=15, blank=True, null=True)
    guardian_name = models.CharField(max_length=100, blank=True, null=True)
    guardian_phone = models.CharField(max_length=15, blank=True, null=True)
    batch = models.CharField(max_length=9)  # e.g., "2023-2027"
    program = models.CharField(max_length=100)  # e.g., "B.Tech in Computer Science"
    admission_date = models.DateField()
    profile_picture = models.ImageField(upload_to='students/profile_pictures/', blank=True, null=True)
    
    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "Students"
        ordering = ['registration_number']
    
    def __str__(self):
        return f"{self.registration_number} - {self.user.get_full_name()}" 