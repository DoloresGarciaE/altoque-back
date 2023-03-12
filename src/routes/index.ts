import { 
    Request, 
    Response, 
    Router,
} from 'express';
import { errorHandlerMiddleware } from '../middlewares/errors';
import { responseHandlerMiddleware } from '../middlewares/response';

export const rootRouter = Router();

rootRouter.get('/ping', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'pong' });
});

rootRouter.use(responseHandlerMiddleware, errorHandlerMiddleware);

rootRouter.use((req: Request, res: Response) => {
    return res.status(200).json({
        code: '#notFound',
        message: `Not found: ${req.protocol}://${req.get('host')}${req.originalUrl}`
    });
});
