from django.contrib import admin
from .models import Home, Reservation, Landlord, Comments

admin.site.register(Home)
admin.site.register(Landlord)
admin.site.register(Reservation)
admin.site.register(Comments)