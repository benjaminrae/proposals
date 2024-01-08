import { Configuration } from './types';

export const configuration = (): Configuration => ({
  port: Number(process.env.PORT) || 3000,
  database: {
    type: 'postgres',
    port: Number(process.env.DATABASE_PORT) || 5432,
    host: process.env.DATABASE_HOST || '127.0.0.1',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
  },
});
