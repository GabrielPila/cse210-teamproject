# Generated by Django 4.1.6 on 2023-02-24 06:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Home',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=500)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('state', models.CharField(max_length=20)),
                ('city', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=150)),
                ('zipcode', models.IntegerField()),
                ('location_lat', models.FloatField(blank=True, null=True)),
                ('location_lon', models.FloatField(blank=True, null=True)),
                ('built_date', models.DateField(blank=True, null=True)),
                ('move_in_date', models.DateField()),
                ('area_sqft', models.IntegerField()),
                ('num_bedrooms', models.IntegerField()),
                ('num_bathrooms', models.IntegerField()),
                ('current_price_month', models.IntegerField()),
                ('has_garage', models.BooleanField(default=False)),
                ('is_furnished', models.BooleanField(default=False)),
                ('is_booked', models.BooleanField(default=False)),
                ('num_views', models.IntegerField(default=0)),
                ('num_saves', models.IntegerField(default=0)),
                ('landlord', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lanlord', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reserv_date', models.DateTimeField()),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
                ('reservation_price', models.IntegerField()),
                ('user_comments', models.CharField(max_length=1000)),
                ('landlord_comments', models.CharField(max_length=1000)),
                ('user_score', models.IntegerField()),
                ('landlord_score', models.IntegerField()),
                ('home', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='home', to='main.home')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Landlord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_landlord', models.BooleanField(default=False)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
