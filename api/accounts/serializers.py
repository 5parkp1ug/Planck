from django.contrib.auth import authenticate, get_user_model
from rest_auth.models import TokenModel
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

User = get_user_model()


class TokenSerializer(serializers.ModelSerializer):
    """
    Serializer for Token model.
    """
    id = serializers.IntegerField(source='user.id', read_only=True)
    first_name = serializers.CharField(source='user.first_name', read_only=True)
    last_name = serializers.CharField(source='user.last_name', read_only=True)
    organization = serializers.CharField(source='user.organization.title', read_only=True)

    class Meta:
        model = TokenModel
        fields = ('id', 'key', 'first_name', 'last_name', 'organization')


class LoginSerializer(serializers.Serializer):
    """
    Custom login serializer to login with username/email & password
    """
    username = serializers.CharField(label='Username/Email', required=True, allow_blank=True)
    password = serializers.CharField(style={'input_type': 'password'})

    def authenticate(self, **kwargs):
        return authenticate(self.context['request'], **kwargs)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        user = None

        if '@' in username:
            user = self.authenticate(email=username, password=password)
        else:
            user = self.authenticate(username=username, password=password)

        if not user:
            raise ValidationError('Invalid Credentials')

        attrs['user'] = user
        return attrs


class UserSerializer(serializers.ModelSerializer):
    """
    Custom user serializer
    """

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', )