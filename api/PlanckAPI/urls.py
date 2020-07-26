"""
dlsAPI URL Configuration
"""
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from rest_auth.views import PasswordResetConfirmView

from shortener.views import MainRedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('rest_auth.urls')),
    path('api/auth/registration/', include('rest_auth.registration.urls')),
    re_path(
        r'^api/auth/password/reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        PasswordResetConfirmView.as_view(),
        name='password_reset_confirm'),
    url(r'^api/auth/registration/', include('rest_auth.registration.urls'), name='account_signup'),

    # accounts url
    path('api/', include('shortener.urls', namespace='shortener')),

    path('<str:keyword>/', MainRedirectView.as_view(), name='redirect-view'),

]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += path('__debug__/', include(debug_toolbar.urls)),