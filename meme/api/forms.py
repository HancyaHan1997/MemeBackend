from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import UserLogin

class UserLoginCreationForm(UserCreationForm):

    class Meta:
        model = UserLogin
        fields = ("username", "email")

class UserLoginChangeForm(UserChangeForm):

    class Meta:
        model = UserLogin
        fields = ("username", "email")