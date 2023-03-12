import { log } from '../utils/logger';

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (typeof err === 'string') {
    return res.status(200).json({ code: '#validation', err: err });
  }

  if (err.code || err.message) {
    log.error(JSON.stringify(err));
  }

  const response = {
    code: err?.code || '#unknown',
    message: err?.message || 'Internal server error'
  };


  res.status(200).json(response);
};

