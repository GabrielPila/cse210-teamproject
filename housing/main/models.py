from django.db import models
from django.contrib.auth.models import User

class Landlord(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='is_landlord')
    is_landlord = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.username}'

class Home(models.Model):

    landlord = models.ForeignKey(User, related_name='lanlord', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    state = models.CharField(max_length=20)
    city = models.CharField(max_length=30)
    address = models.CharField(max_length=150)
    zipcode = models.IntegerField()
    location_lat = models.FloatField(blank=True, null=True)
    location_lon = models.FloatField(blank=True, null=True)
#    photo = models.ImageField(storage=RestApiStorage())
    built_date = models.DateField(blank=True, null=True)
    move_in_date = models.DateField()
    area_sqft = models.IntegerField()
    num_bedrooms = models.IntegerField()
    num_bathrooms = models.IntegerField()
    current_price_month = models.IntegerField()
    has_garage = models.BooleanField(default=False)
    is_furnished = models.BooleanField(default=False) 
    is_booked = models.BooleanField(default=False) 
    num_views = models.IntegerField(default=0)
    num_saves = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.title}'

class Comments(models.Model):

    user = models.ForeignKey(User, related_name='comments_user', on_delete=models.CASCADE)
    home = models.ForeignKey(Home, related_name='comments_home', on_delete=models.CASCADE)
    comment = models.CharField(max_length=1000, blank=True, null=True)
    rating = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.id} - {self.home.id}'

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

    def __str__(self):
        return f'{self.title}'
