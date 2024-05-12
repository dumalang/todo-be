import dotenv from 'dotenv';

dotenv.config();

interface IDatabaseConfig {
  host: string;
  host_read: string;
  port: string;
  db: string;
  username: string;
  password: string;
  debug: boolean;
}

const databaseConfig: IDatabaseConfig = {
  host: process.env.DB_HOST || '',
  host_read: process.env.DB_HOST_READ || '',
  port: process.env.DB_HOST_PORT || '',
  db: process.env.DB_DATABASE || '',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  debug: process.env.DB_DEBUG === 'true' || false,
};

export {databaseConfig};
