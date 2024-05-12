import cors from 'cors';

const corsConfig = {
  allowedOrigins: ['*'],
};

const corsOptions: cors.CorsOptions = {
  origin: (origin: any, callback: any) => {
    if (corsConfig.allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

export {corsOptions};
