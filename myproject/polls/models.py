from django.db import models

# Create your models here.

class Question(models.Model): #질문
    question_text = models.CharField(max_length=200)
    pub_date = models.DateField('date published')

    def __str__(self):
        return self.question_text

class Choice(models.Model): #답변
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    #question 삭제되면 같이 삭제됨
    choice_text=models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
