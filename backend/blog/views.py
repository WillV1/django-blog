from django.shortcuts import render
from blog.models import Blog
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import BlogSerializer


# Create your views here.
# Blog Viewset
class BlogViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = BlogSerializer

    def get_queryset(self):
        return self.request.user.leads.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)




