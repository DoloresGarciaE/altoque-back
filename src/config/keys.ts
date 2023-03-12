import assert from 'node:assert/strict';
import dotenv from 'dotenv';

dotenv.config();

assert.ok(process.env.DB_CONNNECTION_STRING, 'Missing DB_CONNNECTION_STRING');

export const dbSecrets = {
  connectionString: process.env.DB_CONNNECTION_STRING,
};
