#!/usr/bin/env bash
# Run the React dev server on your machine (http://localhost:5173)
set -euo pipefail
cd "$(dirname "$0")/../frontend"
VITE_PROXY_TARGET="http://localhost:${BACKEND_PORT:-8000}" npm run dev
