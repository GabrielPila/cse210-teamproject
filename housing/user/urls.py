from django.contrib import admin
from django.urls import path, include
from .views import * 

app_name = 'authen'
# if we define the app_name, then in all the html files, the path must contain authen:
# eg all the url 'login' should be url 'authen:login'

urlpatterns = [
    # path('login/', authlogin, name='login'), 
    path('register/', register, name='register'), 

]