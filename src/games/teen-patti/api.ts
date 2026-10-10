import { apiRequest } from "../../shared/api/client";

export type TeenPattiState = { roundId: string; phase: string };

export const teenPattiApi = {
  getState: () => apiRequest<TeenPattiState>("/api/teen-patti/state"),
};