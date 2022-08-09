import {NextFunction, Request, Response} from 'express';

import {X_VCLOUD_AUTHORIZATION} from '../../core/const';

export default function (req: Request, res: Response, next: NextFunction) {
  try {
    const authorization = req.headers[X_VCLOUD_AUTHORIZATION];
    // const {authorization} = req.headers;

    if (req.method === 'POST' && req.url.includes('/api/sessions')) {
      next();
      return;
    }

    if (!authorization) {
      res.status(401).json({message: 'User is not authorized'});
    }

    next();
  } catch (error) {
    next(error);
  }
}
