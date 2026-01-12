import "server-only";
import { Pool } from "pg";

function getUrlBoolParam(connectionString: string, name: string) {
  const idx = connectionString.indexOf("?");
  if (idx < 0) return undefined;
  try {
    const params = new URLSearchParams(connectionString.slice(idx + 1));
    const value = params.get(name);
    if (value === null) return undefined;
    return value === "1" || value.toLowerCase() === "true";
  } catch {
    return undefined;
  }
}

function getUrlParam(connectionString: string, name: string) {
  const idx = connectionString.indexOf("?");
  if (idx < 0) return undefined;
  try {
    const params = new URLSearchParams(connectionString.slice(idx + 1));
    const value = params.get(name);
    return value === null ? undefined : value;
  } catch {
    return undefined;
  }
}

function getDatabaseConfig() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL");
  }

  const sslModeFromUrl = getUrlParam(connectionString, "sslmode");
  const sslFromUrl = getUrlBoolParam(connectionString, "ssl");
  const sslEnabledByUrl =
    sslFromUrl === true ||
    sslModeFromUrl === "require" ||
    sslModeFromUrl === "verify-ca" ||
    sslModeFromUrl === "verify-full";

  const sslEnabledByEnv =
    process.env.DATABASE_SSL === "true" ||
    process.env.PGSSLMODE === "require" ||
    process.env.PGSSLMODE === "verify-ca" ||
    process.env.PGSSLMODE === "verify-full";

  const useSsl = sslEnabledByEnv || sslEnabledByUrl;
  const rejectUnauthorized = process.env.DATABASE_SSL_REJECT_UNAUTHORIZED === "true";

  return {
    connectionString,
    ssl: useSsl ? { rejectUnauthorized } : undefined,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
    query_timeout: 20_000,
  };
}

declare global {
  var __xplorebytePgPool: Pool | undefined;
}

export function getPool() {
  if (global.__xplorebytePgPool) return global.__xplorebytePgPool;
  const pool = new Pool(getDatabaseConfig());
  global.__xplorebytePgPool = pool;
  return pool;
}
