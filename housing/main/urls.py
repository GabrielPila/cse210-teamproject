from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path
#from housing import views as housing_views
from .views import * 

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('search/', SearchView.as_view(), name='search'),
    
    # authentication
    path('login/', LoginView.as_view(), name='login'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('get-token/', obtain_auth_token, name='get-token'),

    # pages
    path('listings/', ListingsAPIView.as_view()),
]