from django.contrib.auth import get_user_model
from django.contrib.gis.db.models import PointField
from django.contrib.postgres.fields import JSONField
from django.db import models
from django.utils import timezone

from timezone_field import TimeZoneField

from utils.link_code_generator import get_link_code

User = get_user_model()


class Label(models.Model):
    """Model to store labels which are assigned to Links"""
    title = models.CharField(max_length=50)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='labels')

    def __str__(self):
        return self.title

    class Meta:
        unique_together = ('title', 'created_by')


class Link(models.Model):
    """
    Model to store the customer created links
    """
    keyword = models.CharField(max_length=10, default=get_link_code, unique=True, help_text='Unique keywork for the link')
    deep_link = models.URLField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    # social tags
    title = models.CharField(max_length=70, blank=True, null=True)
    image = models.ImageField(blank=True, null=True)
    description = models.CharField(max_length=150, blank=True, null=True)

    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='links')
    labels = models.ManyToManyField(Label, related_name='associated_links', blank=True)

    def __str__(self):
        return self.keyword

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.now()
        self.updated_at = timezone.now()
        return super().save(*args, **kwargs)


class Country(models.Model):
    """Model to store country related information"""
    continent_name = models.CharField(max_length=13)
    country_name = models.CharField(max_length=30)
    country_capital = models.CharField(max_length=30)
    calling_code = models.CharField(max_length=5)
    country_tld = models.CharField(max_length=5)
    flag_link = models.URLField()
    currency = JSONField()

    def __str__(self):
        return self.continent_name


class IP(models.Model):
    """
    Inventory for caching the geographic info from IP
    """
    ip = models.GenericIPAddressField(protocol='both', unpack_ipv4=True)

    # Area related information
    state_prov = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    zip = models.CharField(max_length=10)
    location = PointField(srid=4326)
    time_zone = TimeZoneField(display_GMT_offset=True)
    isp = models.CharField(max_length=30)
    connection_type = models.CharField(max_length=30)

    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True, related_name='assigned_ips')

    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()

    def __str__(self):
        return f'{self.ip}'

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.localtime()
        self.updated_at = timezone.localtime()
        return super().save(*args, **kwargs)


class Click(models.Model):
    """
    Model to track and store link clicks by user
    """
    link = models.ForeignKey(Link, on_delete=models.CASCADE, related_name='clicks')

    ip = models.ForeignKey(IP, on_delete=models.SET_NULL, null=True, related_name='requests')
    clicked_at = models.DateTimeField()

    # user agent info
    ua = models.TextField()
    browser_family = models.CharField(max_length=30)
    browser_version = models.CharField(max_length=15)
    os_family = models.CharField(max_length=30)
    os_version = models.CharField(max_length=15)
    device_family = models.CharField(max_length=20)
    device_brand = models.CharField(max_length=20)
    device_model = models.CharField(max_length=20)
    is_mobile = models.BooleanField(default=False)
    is_tablet = models.BooleanField(default=False)
    is_pc = models.BooleanField(default=False)
    is_touch_capable = models.BooleanField(default=False)
    is_bot = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)

    def save(self, *args, **kwargs):
        if not self.id:
            self.clicked_at = timezone.now()
        super().save(*args, *kwargs)
