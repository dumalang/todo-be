import {Response, NextFunction} from 'express';
import {IMainRequest} from '../requests/main_request';
import {EHttpStatusCode} from '../enums/EHttpStatusCode';
import {BaseResource} from '../http/resources/BaseResource';

const errorHandler = (
  err: Error,
  req: IMainRequest,
  res: Response,
  // eslint-disable-next-line
  next: NextFunction
) => {
  const statusCode = EHttpStatusCode.INTERNAL_SERVER_ERROR;
  const message = 'Internal server error!';
  const customError = err;

  const errorResource = new BaseResource({
    error: customError,
    message: message,
    status: 500,
  });

  return res.status(statusCode).send(errorResource);
};

export {errorHandler};
