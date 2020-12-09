from django.shortcuts import render
from blog.models import Blog
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import BlogSerializer


# Create your views here.
# Blog Viewset
class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = BlogSerializer


