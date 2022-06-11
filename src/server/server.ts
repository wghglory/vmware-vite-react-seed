import cors from 'cors';
import express, {Application, Request, Response} from 'express';

import {apiPrefix} from './const';
import {router as authRouter} from './routes/auth.route';
import {router as tenantRouter} from './routes/tenant.route';

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(`${apiPrefix}/tenants`, tenantRouter);
app.use(`${apiPrefix}`, authRouter);

// app.get('/', async (req: Request, res: Response): Promise<Response> => {
//   return res.status(200).send({
//     message: 'Hello World!',
//   });
// });

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error: ${error.message}`);
}
