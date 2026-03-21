from django.http import JsonResponse


def healthz(_request):
    return JsonResponse({'status': 'ok'})
