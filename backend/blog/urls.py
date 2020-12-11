from rest_framework import routers
from .views import BlogViewSet, ProfileViewSet

router = routers.DefaultRouter()
router.register('api/blog', BlogViewSet, 'blog')
router.register('api/profile', ProfileViewSet, 'profile')

urlpatterns = router.urls