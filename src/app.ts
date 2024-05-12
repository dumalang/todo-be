import express, {Express} from 'express';
import {indexRouter} from './routes/index_router';
import {errorHandler} from './middleware/error_middleware';
// eslint-disable-next-line
import bodyParser from 'body-parser';
import cors from 'cors';
import loggerMiddleware from './middleware/logger_middleware';
import helmet from 'helmet';
import {corsOptions} from './config/cors_config';

const app: Express = express();

app.use(helmet.hidePoweredBy());

app.use(loggerMiddleware);
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(indexRouter);
app.use(errorHandler);

export default app;
