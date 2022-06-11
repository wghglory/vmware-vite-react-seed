import express, {Application, Request, Response} from 'express';

import tenants from '../data/tenants.data';

export const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  // console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  const token = req.headers.authorization;
  const limit = Number(req.query.limit) || 1000;
  const offset = Number(req.query.offset) || 0;
  const filter = req.query.filter; // (status==OPEN)
  const filterObj = {} as any;

  const items = tenants;

  if (!token) {
    // If not authenticated, respond with a 403 error
    res.status(403).json({
      message: 'Not authorized',
    });
  }

  res.send({
    items: items.slice(offset, limit + offset),
    pageInfo: {
      limit,
      offset,
      total: items.length,
    },
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send({name: `Tenant ${id}`});
});
