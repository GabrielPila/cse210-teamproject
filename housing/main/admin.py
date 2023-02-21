from django.contrib import admin
from .models import Home, Reservation, Landlord

admin.site.register(Home)
admin.site.register(Landlord)
admin.site.register(Reservation)