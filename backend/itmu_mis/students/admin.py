from django.contrib import admin
from .models import Student

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    """Admin configuration for the Student model."""
    list_display = ['registration_number', 'roll_number', 'get_full_name', 'program', 'batch', 'admission_date']
    list_filter = ['program', 'batch', 'admission_date', 'gender', 'category']
    search_fields = ['registration_number', 'roll_number', 'user__first_name', 'user__last_name', 'user__email']
    readonly_fields = ['user']
    fieldsets = (
        ('Personal Information', {
            'fields': ('user', 'registration_number', 'roll_number', 'date_of_birth', 'gender', 
                       'blood_group', 'category', 'aadhar_number', 'address', 'profile_picture')
        }),
        ('Academic Information', {
            'fields': ('program', 'batch', 'admission_date')
        }),
        ('Contact Information', {
            'fields': ('phone_number', 'alternative_phone')
        }),
        ('Family Information', {
            'fields': ('father_name', 'father_occupation', 'father_phone',
                      'mother_name', 'mother_occupation', 'mother_phone',
                      'guardian_name', 'guardian_phone')
        }),
    )
    
    def get_full_name(self, obj):
        return obj.user.get_full_name()
    get_full_name.short_description = 'Name'
    get_full_name.admin_order_field = 'user__first_name' 