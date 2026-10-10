# Brix Platform Monorepo

Brix frontend, backend and Supabase database change-management live in one repository, while each service can still be deployed independently.

## Repository layout

- `src/` — React + Vite + TypeScript frontend (kept at repository root to preserve the current Netlify build setup).
- `backend/` — Node.js + Express + TypeScript + Socket.IO API service.
- `database/supabase/migrations/` — reviewed, forward-only Supabase SQL migrations.
- `.github/workflows/` — frontend/backend build checks and database migration safety checks.

## Frontend

```bash
npm install
cp .env.example .env
npm run dev
```

Set `VITE_API_BASE_URL` to the backend URL. Never put database credentials or Supabase service-role keys in frontend variables.

## Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Health endpoint: `/health`; Socket.IO path: `/ws`. The current backend is a foundation only; authentication, database access, wallets and game engines are not yet implemented.

## Database safety

The existing Supabase project contains live schema/data. This repository does not reset or automatically migrate production. Inspect the real schema, test forward-only migrations against a development database, and review them before any production application. Never commit secrets.

## Deployment

- Frontend: Netlify builds from repository root using `npm install && npm run build`, publish directory `dist`.
- Backend: deploy the `backend/` directory as a separate Node service (for example on Render or Cloud Run), with its own environment variables.
- Database: existing Supabase PostgreSQL project; schema changes are managed through reviewed migrations.

## Current status

The frontend is a UI foundation and game API modules are placeholders. The backend only exposes health/realtime connection scaffolding. This is not yet a complete or production-ready game platform.
