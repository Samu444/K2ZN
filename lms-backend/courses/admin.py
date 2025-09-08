# courses/admin.py
from django.contrib import admin
from .models import Course
from quizzes.models import Quiz

class QuizInline(admin.TabularInline):
    model = Quiz
    extra = 1

class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "facilitator")
    search_fields = ("title", "facilitator__username")
    list_filter = ("facilitator",)
    inlines = [QuizInline]  # 👈 manage quizzes from the course page

admin.site.register(Course, CourseAdmin)
