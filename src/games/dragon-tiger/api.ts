import { apiRequest } from "../../shared/api/client";

export type DragonTigerState = { roundId: string; phase: string };

export const dragonTigerApi = {
  getState: () => apiRequest<DragonTigerState>("/api/dragon-tiger/state"),
};