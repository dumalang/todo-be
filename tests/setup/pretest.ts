import {logger} from '../../src/utils/log_util';

const {execSync} = require('child_process');

// Run Knex migrations
beforeAll(() => {
  logger.info('Running database migrations...');
  execSync('npm run migrate');
});

afterAll(() => {
  logger.info('Rollback database migrations...');
  execSync('npm run migrate:rollback');
});
