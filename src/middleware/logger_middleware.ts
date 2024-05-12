/* eslint-disable node/no-extraneous-import */
import {Response, NextFunction} from 'express';
import dotenv from 'dotenv';

import {IMainRequest} from '../requests/main_request';
import {v4 as uuidv4} from 'uuid';
import {URL} from 'url';

dotenv.config();

const loggerMiddleware = async (
  req: IMainRequest,
  res: Response,
  next: NextFunction
) => {
  const method = req.method;
  const url = req.url;

  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathWithoutParams = parsedUrl.pathname;

  req.logTemplate = `[${method}:${pathWithoutParams}] - [${uuidv4()}]`;
  return next();
};

export default loggerMiddleware;
