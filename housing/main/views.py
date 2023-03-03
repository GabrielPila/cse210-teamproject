# django
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.shortcuts import render
from django.db.models import Q
from datetime import datetime
# rest framework
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status

from rest_framework.parsers import JSONParser
from rest_framework import views, status

from .serializers import UserSerializer, HomeSerializer, ReservationSerializer, CommentsSerializer
from .models import Landlord, Home, Comments

from json import JSONDecodeError


import logging
logger = logging.getLogger("mylogger")


class HomeView(APIView):
    def get(self, request, *args, **kwargs):
        return Response({'message': 'Hello, World!'})


class SearchView(APIView):
    
    def get(self, request, *args, **kwargs):
        return render(request, "index.html")
    
class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        logger.info(request.data)


        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        
        if not user:
            return Response({'error': "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        token = Token.objects.get(user=user)
        return Response({'token': token.key})
    
class SignUpView(APIView):
    def post(self, request, *args, **kwargs):

        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        is_landlord = request.data.get('is_landlord', False)

        if User.objects.filter(username=username).exists():
            return Response({'error': "User already exists"}, status=status.HTTP_400_BAD_REQUEST)

        user = User(username=username)
        user.set_password(password)
        user.email = email
        user.save()

        landlord = Landlord(user = user, is_landlord = is_landlord)
        landlord.save()

        logger = logging.getLogger('applog')
        logger.info(user)

        token = Token.objects.create(user=user)
        return Response({'token': token.key})


# Model views from here

class UserAPIView(views.APIView):
    """
    A simple APIView for creating User entires.
    """
    serializer_class = UserSerializer

    def get_serializer_context(self):
        return {
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }

    def get_serializer(self, *args, **kwargs):
        kwargs['context'] = self.get_serializer_context()
        return self.serializer_class(*args, **kwargs)

    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = UserSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return Response({"result": "error","error": "Json decoding error"}, status= 400)

class ListingsAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        homes = Home.objects.all()
        # logger.info(request.data) # []

        #  extract the params and convert to the correct format 
        all_params = dict(request.GET)
        for key, val in all_params.items():
            all_params[key] = val[0]
        logger.info(all_params)

        if 'location' in all_params:
            location = str(all_params['location'])
            homes = homes.filter(
                    Q(state__icontains=location) | 
                    Q(city__icontains=location) | 
                    Q(address__icontains=location)
                )

        if 'price' in all_params:
            price = int(all_params['price'])
            homes = homes.filter(current_price_month__lte=price)

        if 'move_in_date' in all_params: # 'Tue Feb 28 2023'
            # change the move in date to be lte 
            dates = all_params['move_in_date'].split()[1:]
            month_to_num = {
                'Jan':1,
                'Feb':2,
                'Mar':3,
                'Apr':4,
                'May':5,
                'Jun':6,
                'Jul':7,
                'Aug':8,
                'Sep':9,
                'Oct':10,
                'Nov':11,
                'Dec':12
            }
            date = dates[-1] + '-' + str(month_to_num[dates[0]]) + '-' + dates[1]
            logger.info(date)
    
            date = datetime.strptime(date, "%Y-%m-%d").date()
    
            homes = homes.filter(move_in_date__lte=date)

        serializer = HomeSerializer(homes, many=True)
        return Response(serializer.data)

class HomeAPIView(views.APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        home = Home.objects.get(id=kwargs['pk'])
        home_serializer = HomeSerializer(home)

        return Response(home_serializer.data)

class CommentsAPIView(views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        home = Home.objects.get(id=kwargs['pk'])
        user = request.user
        comment = request.data.get('comment')
        rating = request.data.get('rating')

        comment = Comments(home=home, user=user, comment=comment, rating=rating)
        comment.save()

        return Response({'message': 'Comment added successfully'})

# class ReservationAPIView(views.APIView):
#     """
#     A simple APIView for creating Reservation entires.
#     """
#     serializer_class = ReservationSerializer

#     def get_serializer_context(self):
#         return {
#             'request': self.request,
#             'format': self.format_kwarg,
#             'view': self
#         }

#     def get_serializer(self, *args, **kwargs):
#         kwargs['context'] = self.get_serializer_context()
#         return self.serializer_class(*args, **kwargs)

#     def post(self, request):
#         try:
#             data = JSONParser().parse(request)
#             serializer = ReservationSerializer(data=data)
#             if serializer.is_valid(raise_exception=True):
#                 serializer.save()
#                 return Response(serializer.data)
#             else:
#                 return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         except JSONDecodeError:
#             return Response({"result": "error","message": "Json decoding error"}, status= 400)
