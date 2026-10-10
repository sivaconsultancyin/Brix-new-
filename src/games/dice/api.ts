import { apiRequest } from "../../shared/api/client";

export type DiceState = { roundId: string; phase: string };

export const diceApi = {
  getState: () => apiRequest<DiceState>("/api/dice/state"),
};