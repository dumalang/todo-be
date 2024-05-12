import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import {logger} from './utils/log_util';
import chalk from 'chalk';

const port = process.env.APP_PORT || 8080;
const name = process.env.APP_NAME || 'APP_NAME';
app.listen(port, () => {
  logger.info(
    `${chalk.yellow('⚡️')}[${name}]: Server is running at`,
    chalk.underline(`http://localhost:${port}`)
  );
});

export default app;
