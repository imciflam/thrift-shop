from rest_framework import routers
from .api import LeadViewSet
from django.conf.urls import url
router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')
 
urlpatterns = router.urls
