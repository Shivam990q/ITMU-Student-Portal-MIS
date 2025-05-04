"""
Course models for ITMU MIS.
"""
from django.db import models

class Department(models.Model):
    """Department model."""
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True)
    description = models.TextField(blank=True, null=True)
    
    class Meta:
        verbose_name = "Department"
        verbose_name_plural = "Departments"
        ordering = ['name']
    
    def __str__(self):
        return self.name

class Program(models.Model):
    """Program model (like B.Tech, M.Tech, etc.)."""
    LEVEL_CHOICES = (
        ('UG', 'Undergraduate'),
        ('PG', 'Postgraduate'),
        ('PH', 'PhD'),
        ('DP', 'Diploma'),
    )
    
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=10, unique=True)
    level = models.CharField(max_length=2, choices=LEVEL_CHOICES)
    duration = models.PositiveSmallIntegerField(help_text="Duration in years")
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='programs')
    description = models.TextField(blank=True, null=True)
    
    class Meta:
        verbose_name = "Program"
        verbose_name_plural = "Programs"
        ordering = ['name']
    
    def __str__(self):
        return f"{self.name} ({self.department.name})"

class Course(models.Model):
    """Course model."""
    COURSE_TYPE_CHOICES = (
        ('THEORY', 'Theory'),
        ('LAB', 'Laboratory'),
        ('PROJECT', 'Project'),
        ('SEMINAR', 'Seminar'),
    )
    
    code = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    course_type = models.CharField(max_length=10, choices=COURSE_TYPE_CHOICES, default='THEORY')
    credits = models.PositiveSmallIntegerField()
    lecture_hours = models.PositiveSmallIntegerField(default=0)
    tutorial_hours = models.PositiveSmallIntegerField(default=0)
    practical_hours = models.PositiveSmallIntegerField(default=0)
    programs = models.ManyToManyField(Program, through='ProgramCourse', related_name='courses')
    description = models.TextField(blank=True, null=True)
    syllabus = models.TextField(blank=True, null=True)
    
    class Meta:
        verbose_name = "Course"
        verbose_name_plural = "Courses"
        ordering = ['code']
    
    def __str__(self):
        return f"{self.code} - {self.name}"

class ProgramCourse(models.Model):
    """Mapping between Programs and Courses with semester information."""
    SEMESTER_CHOICES = [(i, f"Semester {i}") for i in range(1, 11)]
    
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    semester = models.PositiveSmallIntegerField(choices=SEMESTER_CHOICES)
    is_elective = models.BooleanField(default=False)
    academic_year = models.CharField(max_length=9)  # e.g., "2023-2024"
    
    class Meta:
        verbose_name = "Program Course"
        verbose_name_plural = "Program Courses"
        unique_together = ['program', 'course', 'semester', 'academic_year']
        ordering = ['program', 'semester', 'course']
    
    def __str__(self):
        return f"{self.program.code} - {self.course.code} - Semester {self.semester}" 