from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view

from api.serializers import UserSerializer

@api_view(['GET'])
def index(request):
    return render(request, 'api/index.html')

@api_view(['GET'])
def test(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data, 200)
