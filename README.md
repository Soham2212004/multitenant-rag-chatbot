# multitenant-rag-chatbot

A multi-tenant chatbot-as-a-service platform: businesses upload documents, test a RAG chatbot in a
preview window, then publish it through an embeddable widget or an API. A client dashboard shows
conversations, leads and unanswered questions.

**Stack:** Django + DRF, PostgreSQL + pgvector, React + TypeScript (Vite), LangChain, LangGraph,
Hugging Face, Docker.

## Quick start

```bash
cp .env.example .env            # then edit it (never commit .env)
docker compose up -d db         # PostgreSQL + pgvector on localhost:5433

./scripts/dev_backend.sh        # Django on http://localhost:8000
./scripts/dev_frontend.sh       # React on  http://localhost:5173
```

Everything in Docker instead: `docker compose --profile full up --build`

Backend tests: `cd backend && source .venv/bin/activate && pytest`

## Project layout

```
backend/    Django API (apps added slice by slice)
frontend/   React dashboard
widget/     embeddable chat widget (added in a later slice)
docs/       architecture notes
```

## Progress

- [x] Slice 0 - skeleton (Django + React + Postgres/pgvector, health check)
- [ ] Slice 1 - accounts, tenants, bots
- [ ] Slice 2 - documents and retrieval
- [ ] Slice 3 - plain RAG chat + evaluation baseline
- [ ] Slice 4 - publish, API keys, widget
- [ ] Slice 5 - client dashboard
- [ ] Slice 6 - LangChain / LangGraph / Hugging Face enhancements
- [ ] Slice 7 - human handoff and knowledge-gap loop
- [ ] Slice 8 - polish and demo
