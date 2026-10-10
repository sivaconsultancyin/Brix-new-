import { apiRequest } from "../../shared/api/client";

export type RouletteState = { roundId: string; phase: string; closesAt: string | null };
export type RouletteHistoryItem = { roundId: string; result: number; settledAt: string };

export const rouletteApi = {
  getState: () => apiRequest<RouletteState>("/api/roulette/state"),
  getHistory: () => apiRequest<RouletteHistoryItem[]>("/api/roulette/history"),
};