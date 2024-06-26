import type {Knex} from 'knex';
import {databaseConfig} from './src/config/database_config';

// Update with your config settings.

const config: {[key: string]: Knex.Config} = {
  development: {
    client: 'mysql2',
    debug: databaseConfig.debug,
    connection: {
      user: databaseConfig.username,
      host: databaseConfig.host,
      database: databaseConfig.db,
      password: databaseConfig.password,
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
  },

  test: {
    client: 'sqlite3',
    debug: databaseConfig.debug,
    useNullAsDefault: true,
    connection: {
      filename: './db.sqlite3',
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql2',
    debug: databaseConfig.debug,
    connection: {
      user: databaseConfig.username,
      host: databaseConfig.host,
      database: databaseConfig.db,
      password: databaseConfig.password,
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};

export default config;
