# Generated by Django 4.1.4 on 2023-02-28 00:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('main', '0002_alter_landlord_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='home',
            name='landlord',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='landlord', to=settings.AUTH_USER_MODEL),
        ),
    ]
