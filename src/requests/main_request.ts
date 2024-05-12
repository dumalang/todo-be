import {NextFunction, Request, Response} from 'express';

interface IMainRequest extends Request {
  userId?: number;
  uuid?: string;
  logTemplate?: string;
}

const MainRequest = (req: IMainRequest, res: Response, next: NextFunction) => {
  req.logTemplate = 'Base Log Template';
  next();
};

export {IMainRequest, MainRequest};
