import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import path from 'path';

async function setup() {
  let connection;
  try {
    console.log('Connecting to MySQL server...');
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      multipleStatements: true
    });
    
    console.log('Creating database fitlife_db...');
    await connection.query('CREATE DATABASE IF NOT EXISTS fitlife_db;');
    
    console.log('Using fitlife_db...');
    await connection.query('USE fitlife_db;');
    
    console.log('Reading schema.sql...');
    const schemaPath = path.join(process.cwd(), 'db', 'schema.sql');
    const schemaSql = await fs.readFile(schemaPath, 'utf8');
    
    console.log('Executing schema.sql...');
    // Split by semicolons for multiple statements, or just rely on multipleStatements: true
    await connection.query(schemaSql);
    console.log('Schema imported successfully.');

  } catch (error) {
    console.error('Error during DB setup:', error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

setup();
