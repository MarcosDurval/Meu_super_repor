from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    status_list ={
      ('pending','pending'),
      ('doing','doing'),
      ('done','done')
    }
    status = models.CharField(choices=status_list, max_length=25)
    description = models.TextField()
    date = models.DateField(default=datetime.today())
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.status + self.description + str(self.user_id)