from rest_framework import serializers
from .models import Quiz, Question




class QuestionSerializer(serializers.ModelSerializer):
  class Meta:
   model = Question
fields = ('id', 'quiz', 'text', 'correct_a')