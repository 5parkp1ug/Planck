from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView

from .models import Link


class MainRedirectView(APIView):
    """
    Main View responsible for redirecting the users to the actual url
    """
    def get(self, request, *args, **kwargs):
        keyword = kwargs.get('keyword', None)
        print(keyword)
        try:
            link = Link.objects.get(keyword=keyword)
        except Link.DoesNotExist:
            return render(request, 'redirect_404.html')
        print(link.__dict__)
        context = {
            'link': link
        }

        return render(request, 'redirect_template.html', context=context)
