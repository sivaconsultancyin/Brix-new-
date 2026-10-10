# Brix Frontend

Mobile-first React + Vite + TypeScript dashboard for the Brix game platform.

## Scope

- Frontend only; backend and database are separate repositories.
- Each game has its own API module under `src/games/<game>/api.ts`.
- Shared code is limited to common UI and API transport.
- No Supabase credentials, service-role keys, or direct database access belong in this frontend.
- Game APIs are placeholders until the separate backend contract is implemented.
- No live game engine or real-money betting is implemented in this foundation.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

Set `VITE_API_BASE_URL` to the public backend URL when the backend is ready. Only public values may use the `VITE_` prefix.

## Checks

```bash
npm run typecheck
npm run build
```

## Deployment

Netlify build command: `npm install && npm run build`
Publish directory: `dist`

Configure the Netlify site to build from this repository root.
