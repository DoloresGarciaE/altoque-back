import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { rootRouter } from './routes';

export const app = express();

app
  .disable('x-powered-by')
  .use(cors())
  .use(express.json())
  .use(helmet())
  .use(rootRouter);
