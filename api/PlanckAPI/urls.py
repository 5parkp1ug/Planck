"""
dlsAPI URL Configuration
"""
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path

from shortener.views import MainRedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('dj_rest_auth.urls')),
    path('api/registration/', include('dj_rest_auth.registration.urls')),

    # accounts url
    path('api/', include('shortener.urls', namespace='shortener')),

    path('<str:keyword>/', MainRedirectView.as_view(), name='redirect-view'),

]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += path('__debug__/', include(debug_toolbar.urls)),