import { apiRequest } from "../../shared/api/client";

export type AviatorState = { roundId: string; phase: string; multiplier: number | null; startedAt: string | null };

export const aviatorApi = {
  getState: () => apiRequest<AviatorState>("/api/aviator/state"),
};