# Architecture (work in progress)

Request flow, one line per hop:

1. Dashboard (React) -> `/api/...` -> Django REST API (session auth, tenant-scoped queries)
2. Widget (vanilla JS) -> `/api/chat/stream` with a public site key -> Django (origin check, rate limit)
3. Django -> LangGraph workflow -> retriever (pgvector) -> reranker -> LLM -> streamed answer
4. Everything is stored per tenant in PostgreSQL

This file grows with each slice.
