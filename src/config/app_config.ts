import dotenv from 'dotenv';
dotenv.config();

interface IAppConfig {
  appName: string;
  debug: boolean;
  appEnv: 'production' | 'development' | 'test' | string;
  security: {
    token: string;
  };
}

if (!process.env.TOKEN) {
  throw new Error('Mandatory env var TOKEN must be defined');
}

const appConfig: IAppConfig = {
  appName: process.env.APP_NAME || 'APPNAME',
  debug: process.env.APP_DEBUG === 'true' || false,
  appEnv: process.env.APP_ENV || 'development',
  security: {
    token: process.env.TOKEN,
  },
};

export {IAppConfig, appConfig};
