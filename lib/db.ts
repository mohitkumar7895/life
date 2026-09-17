import mysql from 'mysql2/promise';

const globalForMysql = global as unknown as { mysql: mysql.Pool | undefined };

export const db =
  globalForMysql.mysql ??
  mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '3306'),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

if (process.env.NODE_ENV !== 'production') globalForMysql.mysql = db;

export default db;

export async function query(sql: string, values?: any[]) {
  const [rows] = await db.query(sql, values);
  return rows;
}
