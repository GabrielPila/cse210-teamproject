from re import S
from django.shortcuts import render
from django.http import HttpResponse

def home(req):
    # About is the model, objects are all the instances 
    return render(req, 'index.html')

def about(req):
    data = "get all the data out"
    return HttpResponse(data) # response with the data 

