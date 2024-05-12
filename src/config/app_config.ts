import dotenv from 'dotenv';
dotenv.config();

const appConfig = {
  appName: process.env.APP_NAME,
  debug: process.env.APP_DEBUG === 'true',
  security: {
    token: process.env.TOKEN,
  },
};

export {appConfig};
