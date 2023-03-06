from . import models
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.User
        fields = ('id', 
                  'username', 
                  'email', 
                  'is_landlord')
        
class CommentsSerializer(serializers.ModelSerializer):

    user = UserSerializer()
    
    class Meta:
        model = models.Comments
        fields = (
            'id',
            'user',
            'comment',
            'rating',
            'created_at',
        )

class HomeSerializer(serializers.ModelSerializer):

    landlord = UserSerializer()
    comments_home = serializers.SerializerMethodField()
    overall_rating = serializers.SerializerMethodField('get_overall_rating')

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
            'photos',
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
            'comments_home',
            'overall_rating'
		)

    def get_comments_home(self, instance):
        comments = instance.comments_home.all().order_by('-created_at')
        return CommentsSerializer(comments, many=True).data
    
    def get_overall_rating(self, instance):
        comments = instance.comments_home.all()
        if comments.count() == 0:
            return 0
        else:
            return round(sum([comment.rating for comment in comments]) / comments.count(), 1)
        
class ReservationSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = models.Reservation
        field = '__all__'




class HomeGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Home
        fields = '__all__' 


class CommentsGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comments
        fields = '__all__' 


class UserGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__' 