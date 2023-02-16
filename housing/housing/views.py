from rest_framework.views import APIView
from rest_framework.response import Response

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        return Response({'message': 'Hello, World!'})

