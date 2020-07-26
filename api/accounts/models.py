from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


def get_profile_pic_path(instance, filename):
    return 'media/profile/%s/%s' % (instance.username, filename)


class User(AbstractUser):

    # Fields
    profile_pic = models.ImageField(upload_to=get_profile_pic_path, blank=True, null=True)

    def __str__(self):
        return self.get_full_name()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
