#!/usr/bin/env bash
# Run Django on your machine (needs the database: docker compose up -d db)
set -euo pipefail
cd "$(dirname "$0")/../backend"
source .venv/bin/activate
python manage.py migrate
python manage.py runserver "${BACKEND_PORT:-8000}"
