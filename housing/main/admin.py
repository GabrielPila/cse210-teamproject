from django.contrib import admin
from .models import User, Landlord, Home, Reservation

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        'user_id', 
        'username', 
        'first_name', 
        'last_name', 
        'email', 
        #'photo', 
        'created_at',
        'last_login', 
        'birthdate', 
        'rating', 
        #'metadata'
    )


@admin.register(Landlord)
class LandlordAdmin(admin.ModelAdmin):
    list_display = (
        'lanlord_id',
        'username', 
        'first_name', 
        'last_name', 
        'email', 
        #'photo', 
        'created_at', 
        'last_login', 
        'birthdate', 
        'rating', 
        #'metadata'
    )


@admin.register(Home)
class HomeAdmin(admin.ModelAdmin):
    list_display = (
        'home_id',
        'lanlord_id',
        'description',
        'created_at',
        'state',
        'city',
        'address',
        'zipcode',
        'location_lat',
        'location_lon',
        #'photo',
        'built_date',
        'area_sqft',
        'num_bedrooms',
        'num_bathrooms',
        'current_price_month',
        'has_garage',
        'is_furnished',
        'is_booked',
        'num_views',
        'num_saves',
        #'metadata'
    )


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = (
        'reservation_id',
#        'user_id',
#        'lanlord_id',
#        'home_id',
        'reserv_date',
        'start_date',
        'end_date',
        'reservation_price',
        'user_comments',
        'landlord_comments',
        'user_score',
        'landlord_score',
        #'metadata'
    )


