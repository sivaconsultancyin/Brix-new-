import "dotenv/config";
import cors from "cors";
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const port = Number(process.env.PORT ?? 4000);
const allowedOrigins = (process.env.CORS_ORIGINS ?? "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable("x-powered-by");
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: "100kb" }));

app.get("/health", (_request, response) => {
  response.status(200).json({ status: "ok", service: "brix-backend", timestamp: new Date().toISOString() });
});

const io = new Server(httpServer, {
  cors: { origin: allowedOrigins, methods: ["GET", "POST"] },
  path: "/ws",
});

io.on("connection", (socket) => {
  socket.emit("system:ready", { connected: true });
  socket.on("disconnect", () => {
    // Connection lifecycle only. Game state must remain server-authoritative.
  });
});

httpServer.listen(port, "0.0.0.0", () => {
  console.log(JSON.stringify({ level: "info", event: "server_listening", port, websocketPath: "/ws" }));
});
