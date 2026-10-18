import { registerAs } from '@nestjs/config';
import { validateEnv } from './env.validation.js';

export const databaseConfig = registerAs('database', () => {
  const env = validateEnv(process.env);
  return {
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    ssl: env.DB_SSL,
    logging: env.NODE_ENV === 'development',
  };
});
