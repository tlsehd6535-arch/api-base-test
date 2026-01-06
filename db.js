import mysql from 'mysql2/promise';

export const db = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tlsehd6535@',
  port: 3306,
  database: 'dongbin', // 실제 DB명으로 바꿔
  waitForConnections: true,
  connectionLimit: 10,
});