import { apiRequest } from "../../shared/api/client";

export type AndarBaharState = { roundId: string; phase: string };

export const andarBaharApi = {
  getState: () => apiRequest<AndarBaharState>("/api/andar-bahar/state"),
};