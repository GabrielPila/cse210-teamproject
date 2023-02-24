# django
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.shortcuts import render

# rest framework
from rest_framework import status
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token


class HomeView(APIView):

    def get(self, request, *args, **kwargs):
        return Response({'message': 'Hello, World!'})


class SearchView(APIView):
    
    def get(self, request, *args, **kwargs):
        return render(request, "index.html")

class LoginView(APIView):
    def post(self, request, *args, **kwargs):

        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        
        if not user:
            return Response({'message': "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        token = Token.objects.get(user=user)
        return Response({'token': token.key})
    
class SignUpView(APIView):
    def post(self, request, *args, **kwargs):

        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({'message': "User already exists"}, status=status.HTTP_400_BAD_REQUEST)

        user = User(username=username)
        user.set_password(password)
        user.save()


        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'name':username, 'email':email, 'password':password})