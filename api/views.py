from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def index(request):
    return render(request, 'api/index.html')

@api_view(['GET'])
def test(request):
    return Response({'succes': 'testing this'})


