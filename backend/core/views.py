from django.db import connection
from django.utils import timezone
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(["GET"])
@permission_classes([AllowAny])
def health(request):
    """Tiny status check: is the API up, can it reach Postgres, is pgvector enabled?"""
    database_ok = False
    pgvector_ok = False
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            database_ok = True
            cursor.execute("SELECT 1 FROM pg_extension WHERE extname = 'vector'")
            pgvector_ok = cursor.fetchone() is not None
    except Exception:  # noqa: BLE001 - a health check must never crash
        pass

    return Response(
        {
            "status": "ok" if (database_ok and pgvector_ok) else "degraded",
            "service": "chatbot-backend",
            "database": database_ok,
            "pgvector": pgvector_ok,
            "time": timezone.now().isoformat(),
        }
    )
