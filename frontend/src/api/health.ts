import { apiGet } from "./client";

export interface Health {
  status: "ok" | "degraded";
  service: string;
  database: boolean;
  pgvector: boolean;
  time: string;
}

export function fetchHealth(): Promise<Health> {
  return apiGet<Health>("/health/");
}
