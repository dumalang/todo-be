import express, {Request, Response} from 'express';
import {ELogStage, logger} from '../utils/log_util';
import {MainRequest} from '../requests/main_request';
import {BaseResource} from '../http/resources/BaseResource';
import {EHttpStatusCode} from '../enums/EHttpStatusCode';
import {appConfig} from '../config/app_config';

const router = express.Router();

router.get('/', MainRequest, (req: Request, res: Response) => {
  const logTemplate = 'base endpoint';
  logger.info(logTemplate, ELogStage.start);

  logger.info('hello');
  logger.debug('hello');
  logger.warn('hello');
  logger.error('hello');

  logger.info(logTemplate, ELogStage.end);
  // throw new Error('This is custom error');
  res.json(
    new BaseResource({
      message: '',
      data: {
        app_name: appConfig.appName,
      },
      status: EHttpStatusCode.OK,
    })
  );
});

export {router as indexRouter};
