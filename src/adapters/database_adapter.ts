/* eslint-disable @typescript-eslint/no-explicit-any */
import {knex} from 'knex';
import * as connectionConfig from '../../knexfile';
import {appConfig} from '../config/app_config';

const connection = connectionConfig.default[appConfig.appEnv];
const DB = knex(connection);

export {DB, connection as databaseConnectionConfig};
