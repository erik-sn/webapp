from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin

from api.views import index

urlpatterns = [
    url(r'^api/admin/', admin.site.urls),
    url(r'^api/', include('api.urls')),
]

# troubleshooting tool
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns


"""
If we are serving the base html file through django then
route all non-matching urls to the html file where they
will be processed on the client by the react application
"""
if settings.SERVER_TYPE.upper() == 'DJANGO':
    urlpatterns += [url(r'.*$', index)]
