# quizzes/admin.py
from django.contrib import admin
from .models import Quiz, Question

class QuestionInline(admin.TabularInline):  # or StackedInline for full forms
    model = Question
    extra = 2   # show 2 empty slots by default

class QuizAdmin(admin.ModelAdmin):
    list_display = ("title", "course")
    inlines = [QuestionInline]  # 👈 questions inline inside quizzes

admin.site.register(Quiz, QuizAdmin)
