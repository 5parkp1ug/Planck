from django.contrib import admin

# Register your models here.
from .models import Link


@admin.register(Link)
class LinkAdmin(admin.ModelAdmin):
    list_display = ('id', 'keyword', 'created_by')