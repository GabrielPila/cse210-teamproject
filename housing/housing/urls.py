from django.contrib import admin
from django.urls import path, include
from .views import * 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('', include('main.urls'), name='main'),
]
