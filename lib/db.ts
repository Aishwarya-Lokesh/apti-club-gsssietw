import mysql, { Pool, PoolConnection } from 'mysql2/promise';

// Database configuration with environment variables and secure defaults
const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'apti_placement_db',
  waitForConnections: true,
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || '10', 10),
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  timezone: '+05:30', // Indian Standard Time (IST) for GSSSIETW
};

let pool: Pool | null = null;
let isConnected = false;
let connectionAttempted = false;

export function getPool(): Pool {
  if (!pool) {
    try {
      pool = mysql.createPool(dbConfig);
    } catch (err) {
      console.error('[DB] Failed to initialize MySQL pool:', err);
      throw err;
    }
  }
  return pool;
}

/**
 * Execute a query with parameters against the MySQL connection pool
 */
export async function query<T = any>(sql: string, params?: any[]): Promise<T> {
  const p = getPool();
  try {
    const [results] = await p.query(sql, params);
    isConnected = true;
    return results as T;
  } catch (error: any) {
    // If the database is currently unreachable, log a clean warning
    console.warn(`[DB Query Warning] Query failed (${error.code || error.message}): ${sql.slice(0, 80)}...`);
    throw error;
  }
}

/**
 * Health check helper to verify database connectivity
 */
export async function testConnection(): Promise<{ connected: boolean; message: string }> {
  try {
    const p = getPool();
    const connection: PoolConnection = await p.getConnection();
    await connection.ping();
    connection.release();
    isConnected = true;
    connectionAttempted = true;
    return { connected: true, message: 'MySQL connection established successfully' };
  } catch (error: any) {
    isConnected = false;
    connectionAttempted = true;
    return { 
      connected: false, 
      message: `MySQL unreachable (${error.code || error.message}). App is operating in resilient fallback mode.` 
    };
  }
}

export function isDbLive(): boolean {
  return isConnected;
}

export default {
  query,
  getPool,
  testConnection,
  isDbLive
};
