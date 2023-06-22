from django.contrib import admin
from polls.models import Question, Choice

class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 2

class QuestionAdmin2(admin.ModelAdmin):
    fieldsets = [
        ('Question Statement', {'fields': ['question_text']}),
        ('Date Information', {'fields': ['pub_date']})
    ]
    inlines = [ChoiceInline]

class QuestionAdmin(admin.ModelAdmin):
    fields = ['pub_date', 'question_text']




# Register your models here.
admin.site.register(Question, QuestionAdmin2)
admin.site.register(Choice)

