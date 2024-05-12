/* eslint-disable @typescript-eslint/no-explicit-any */
import {knex} from 'knex';
import {databaseConfig} from '../database_config';

const DB = knex({
  client: 'mysql2',
  connection: {
    host: databaseConfig.host,
    user: databaseConfig.username,
    password: databaseConfig.password,
    database: databaseConfig.db,
  },
  pool: {min: 0, max: 100},
});

export {DB};
