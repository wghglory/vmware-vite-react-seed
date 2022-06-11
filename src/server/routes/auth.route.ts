import {faker} from '@faker-js/faker';
import express, {Application, Request, Response} from 'express';

import {ACCESS_TOKEN} from '../../core/const';
import {User} from '../../core/models/user';
import users from '../data/users.data';

export const router = express.Router();

let currentUser: any = null;
let token: string = '';

// middleware that is specific to this router
router.use((req, res, next) => {
  // console.log('Time: ', Date.now());
  next();
});

router.post('/session', (req: Request, res: Response) => {
  const {username} = req.body as User;

  const foundUser = users.find(u => u.username === username);
  if (foundUser) {
    delete foundUser.password;

    currentUser = foundUser;
    token = 'MOCK_ACCESS_TOKEN';

    res.setHeader(ACCESS_TOKEN, token);
    res.json({...foundUser, token: faker.datatype.uuid()});
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

router.get('/current-user', (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (currentUser && token) {
    res.send({user: currentUser});
  } else {
    res.status(401).json({message: 'Not Authorized'});
  }
});
