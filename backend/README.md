# Brix Backend

Node.js + Express + TypeScript + Socket.IO foundation. This service is deployed independently from the frontend.

## Local development

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Health check: `GET /health`  
Socket.IO path: `/ws`

## Environment

- `PORT`: HTTP port (defaults to 4000)
- `CORS_ORIGINS`: comma-separated allowed frontend origins

Do not put secrets in source control. The backend currently provides a health endpoint and realtime connection scaffold only. Authentication, database repositories, wallets, settlements and game engines are not implemented yet. Do not accept client-provided game outcomes or wallet balances.
