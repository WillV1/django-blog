from rest_framework import routers
from .views import BlogViewSet

router = routers.DefaultRouter()
router.register('api/blog', BlogViewSet, 'blog')

urlpatterns = router.urls