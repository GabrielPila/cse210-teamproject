from django.db import models
from django.contrib.auth.models import User
#from rest_models.storage import RestApiStorage
#from rest_models.backend.utils import JSONField
# Create your models here.

# class User(models.Model):

#     user_id = models.CharField(max_length=15)
#     username = models.CharField(max_length=20)
#     first_name = models.CharField(max_length=135)
#     last_name = models.CharField(max_length=135)
#     email = models.EmailField(verbose_name="Email")
# #    photo = models.ImageField(storage=RestApiStorage())
#     created_at = models.DateTimeField(auto_now_add=True)
#     last_login = models.DateTimeField()
#     birthdate = models.DateTimeField()
#     rating = models.IntegerField()
# #    metadata = JSONField(null=True)
    
#     def __str__(self):
#         return f'{self.title}'


# class Landlord(models.Model):

#     lanlord_id = models.IntegerField()
#     username = models.CharField(max_length=20)
#     first_name = models.CharField(max_length=135)
#     last_name = models.CharField(max_length=135)
#     email = models.EmailField(verbose_name="Email")
# #    photo = models.ImageField(storage=RestApiStorage())
#     created_at = models.DateTimeField(auto_now_add=True)
#     last_login = models.DateTimeField()
#     birthdate = models.DateTimeField()
#     rating = models.IntegerField()
# #    metadata = JSONField(null=True)

#     def __str__(self):
#         return f'{self.title}'

class Landlord(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE
    )
    is_landlord = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.username}'


class Home(models.Model):

    landlord = models.ForeignKey(User, null=True, related_name='lanlord', on_delete=models.CASCADE)
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    state = models.CharField(max_length=20)
    city = models.CharField(max_length=30)
    address = models.CharField(max_length=150)
    zipcode = models.IntegerField()
    location_lat = models.FloatField()
    location_lon = models.FloatField()
#    photo = models.ImageField(storage=RestApiStorage())
    built_date = models.DateField()
    area_sqft = models.IntegerField()
    num_bedrooms = models.IntegerField()
    num_bathrooms = models.IntegerField()
    current_price_month = models.IntegerField()
    has_garage = models.BooleanField(default=False)
    is_furnished = models.BooleanField(default=False) 
    is_booked = models.BooleanField(default=False) 
    num_views = models.IntegerField(default=0)
    num_saves = models.IntegerField(default=0)
#    metadata = JSONField(null=True)

    def __str__(self):
        return f'{self.title}'


class Reservation(models.Model):
    # Think in another name (just to show interest)

    user = models.ForeignKey(User, null=True, related_name='user', on_delete=models.CASCADE)
    home = models.ForeignKey(Home, null=True, related_name='home', on_delete=models.CASCADE)
    reserv_date = models.DateTimeField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    reservation_price = models.IntegerField()
    user_comments = models.CharField(max_length=1000)
    landlord_comments = models.CharField(max_length=1000)
    user_score = models.IntegerField()
    landlord_score = models.IntegerField()
#    metadata = JSONField(null=True)

    def __str__(self):
        return f'{self.title}'
