import {faker} from '@faker-js/faker';
import express, {Application, Request, Response} from 'express';

import {ACCESS_TOKEN, X_VCLOUD_AUTHORIZATION} from '../../core/const';
import {User, VcdSession} from '../../core/models/user';
// import users from '../data/users.data';
import users from '../data/session.data';

export const router = express.Router();

let currentUser: VcdSession | null = null;
let token: string = '';

// middleware that is specific to this router
router.use((req, res, next) => {
  // console.log('Time: ', Date.now());
  next();
});

router.post('/sessions', (req: Request, res: Response) => {
  const authorization = req.headers.authorization;

  if (authorization === undefined) {
    return res.status(401).send('Please provide Authorization using basic in headers with base 64 encoding');
  }

  const encoded = authorization.split(' ')[1];
  const decoded = Buffer.from(encoded, 'base64').toString();
  const username = decoded.split(':')[0];
  const password = decoded.split(':')[1];

  const foundUser = users.find(u => u.user === username);
  if (foundUser) {
    currentUser = foundUser;
    token = 'mock_auth_token';

    res.set('Access-Control-Expose-Headers', X_VCLOUD_AUTHORIZATION);
    res.setHeader(X_VCLOUD_AUTHORIZATION, token);
    res.json(foundUser);
    // res.json({...foundUser, token: faker.datatype.uuid()});
  } else {
    res.status(401).json({
      message: 'No user found',
    });
  }
});

router.delete('/session', (req, res) => {
  currentUser = null;
  token = '';

  res.status(204).send();
});

router.get('/session', (req: Request, res: Response) => {
  const token = req.headers[X_VCLOUD_AUTHORIZATION];
  // const token = req.headers.authorization;

  if (currentUser && token) {
    res.send(currentUser);
  } else {
    res.status(401).json({message: 'Not Authorized'});
  }
});
