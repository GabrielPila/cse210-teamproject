from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path
from .views import * 

urlpatterns = [
    path('', HomeView.as_view(), name='home'),

    # authentication
    path('login/', LoginView.as_view(), name='login'),
    path('sign-up/', SignUpView.as_view(), name='sigup'),
    path('get-token/', obtain_auth_token, name='get-token'),
]