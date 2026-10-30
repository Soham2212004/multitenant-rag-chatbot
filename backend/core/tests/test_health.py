import pytest
from django.test import Client


@pytest.mark.django_db
def test_health_reports_database_and_pgvector():
    response = Client().get("/api/health/")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["database"] is True
    assert data["pgvector"] is True
