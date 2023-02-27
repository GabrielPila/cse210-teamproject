from . import models
from rest_framework import serializers
# from rest_framework.fields import (BooleanField,
#                                     CharField, 
#                                     EmailField, 
#                                     URLField, 
#                                     UUIDField,
#                                     IPAddressField,
#                                     IntegerField,
#                                     FloatField,
#                                     DecimalField,
#                                     DateTimeField,
#                                     DateField,
#                                     DurationField,
#                                     ImageField,
#                                     JSONField,
#                                     ModelField,
#                                     HiddenField
#                                     )

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.User
        fields = ('id', 
                  'username', 
                  'email', 
                  'is_landlord')

class HomeSerializer(serializers.ModelSerializer):

    landlord = UserSerializer()

    class Meta:
        model = models.Home
        fields = (
            'id',
            'landlord',
            'title',
            'description',
            'created_at',
            'move_in_date',
            'state',
            'city',
            'address',
            'zipcode',
            'location_lat',
            'location_lon',
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
		)



class ReservationSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = models.Reservation
        field = '__all__'