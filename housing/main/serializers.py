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

#    user_id = CharField(source='user_id', required=True)
#    username = CharField(source='username', required=True)
#    first_name = CharField(source='first_name', required=True)
#    last_name = CharField(source='last_name', required=True)
#    email = EmailField(source='email', required=True)
#    photo = ImageField(source='photo', required=True)
#    created_at = DateTimeField(source='created_at', required=True)
#    last_login = DateTimeField(source='last_login', required=True)
#    birthdate = DateTimeField(source='birthdate', required=True)
#    rating = IntegerField(source='rating', required=True)
#    metadata = null(source='metadata', required=True)
    
    class Meta:
        model = models.User
        fields = '__all__'



# class LandlordSerializer(serializers.ModelSerializer):

#     #lanlord_id = IntegerField(source='lanlord_id', required=True)
#     #username = CharField(source='username', required=True)
#     #first_name = CharField(source='first_name', required=True)
#     #last_name = CharField(source='last_name', required=True)
#     #email = EmailField(source='email', required=True)
#     #photo = ImageField(source='photo', required=True)
#     #created_at = DateTimeField(source='created_at', required=True)
#     #last_login = DateTimeField(source='last_login', required=True)
#     #birthdate = DateTimeField(source='birthdate', required=True)
#     #rating = IntegerField(source='rating', required=True)
#     #metadata = JSONField(source='metadata', required=True)


#     class Meta:
#         model = models.Landlord
#         fields = '__all__'

#         # fields = (
#         #     'lanlord_id',
#         #     'username',
#         #     'first_name',
#         #     'last_name',
#         #     'email',
#         #     'photo',
#         #     'created_at',
#         #     'last_login',
#         #     'birthdate',
#         #     'rating',
#         #     'metadata'
#         # )



class HomeSerializer(serializers.ModelSerializer):


    # #home_id = IntegerField(source='home_id', required = True)
    # #lanlord_id = ForeignKey(source='lanlord_id', required = True)
    # description = CharField(source='description', required = True)
    # #created_at = DateTimeField(source='created_at', required = True)
    # state = CharField(source='state', required = True)
    # city = CharField(source='city', required = True)
    # address = CharField(source='address', required = True)
    # zipcode = IntegerField(source='zipcode', required = True)
    # location_lat = FloatField(source='location_lat', required = True)
    # location_lon = FloatField(source='location_lon', required = True)
    # photo = ImageField(source='photo', required = True)
    # built_date = DateField(source='built_date', required = True)
    # area_sqft = IntegerField(source='area_sqft', required = True)
    # num_bedrooms = IntegerField(source='num_bedrooms', required = True)
    # num_bathrooms = IntegerField(source='num_bathrooms', required = True)
    # current_price_month = IntegerField(source='current_price_month', required = True)
    # has_garage = IntegerField(source='has_garage', required = True)
    # is_furnished = BooleanField(source='is_furnished', required = True)
    # #is_booked = BooleanField(source='is_booked', required = True)
    # #num_views = IntegerField(source='num_views', required = True)
    # #num_saves = IntegerField(source='num_saves', required = True)
    # #metadata = JSONField(source='metadata', required = True)

    class Meta:
        model = models.Home
        fields = '__all__'
        # fields = (
        #     'home_id',
        #     'lanlord_id',
        #     'description',
        #     'created_at',
        #     'state',
        #     'city',
        #     'address',
        #     'zipcode',
        #     'location_lat',
        #     'location_lon',
        #     'photo',
        #     'built_date',
        #     'area_sqft',
        #     'num_bedrooms',
        #     'num_bathrooms',
        #     'current_price_month',
        #     'has_garage',
        #     'is_furnished',
        #     'is_booked',
        #     'num_views',
        #     'num_saves',
        #     'metadata'
		# )



class ReservationSerializer(serializers.ModelSerializer):
 
#     #reservation_id = IntegerField(source='reservation_id', required=True)
#     #user_id = ForeignKey(source='user_id', required=True)
#     #lanlord_id = ForeignKey(source='lanlord_id', required=True)
#     #home_id = ForeignKey(source='home_id', required=True)
#     reserv_date = DateTimeField(source='reserv_date', required=True)
#     start_date = DateTimeField(source='start_date', required=True)
#     end_date = DateTimeField(source='end_date', required=True)
#     reservation_price = IntegerField(source='reservation_price', required=True)
#     user_comments = CharField(source='user_comments', required=False)
#     landlord_comments = CharField(source='landlord_comments', required=False)
#     user_score = IntegerField(source='user_score', required=False)
#     landlord_score = IntegerField(source='landlord_score', required=False)
#    # metadata = JSONField(source='metadata', required=True)


    class Meta:
        model = models.Reservation
        field = '__all__'
#         fields = (
#             'reservation_id',
# #            'user_id',
# #            'lanlord_id',
# #            'home_id',
#             'reserv_date',
#             'start_date',
#             'end_date',
#             'reservation_price',
#             'user_comments',
#             'landlord_comments',
#             'user_score',
#             'landlord_score',
#             'metadata'
# 		)