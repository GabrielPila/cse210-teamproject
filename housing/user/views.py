from django.shortcuts import render, redirect
from django.contrib import messages
# from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User 


# Create your views here.
def register(req):
    if req.method == 'POST':
        name = req.POST['name']
        pw = req.POST['password']
        email = req.POST['email']
        if User.objects.filter(username=name).exists():
            messages.error(req, 'user already exists')  
        elif User.objects.filter(email=email).exists():
            messages.error(req, 'email already exists')  
        else:
            user = User.objects.create_user(username=name, password=pw, email=email)
            user.save()
            messages.success(req, 'successfully registered! ')  
            return redirect('home')
    return render(req, 'user/register.html')
