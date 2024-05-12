import type {Knex} from 'knex';
import {databaseConfig} from './src/config/database_config';

// Update with your config settings.

const config: {[key: string]: Knex.Config} = {
  development: {
    client: 'mysql2',
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

  staging: {
    client: 'mysql2',
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

  production: {
    client: 'mysql2',
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

module.exports = config;
