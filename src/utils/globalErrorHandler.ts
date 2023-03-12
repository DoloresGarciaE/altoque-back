export const globalErrorHanlder = (middleware) => (req, res, next) => {
  try {
    middleware(req ,res,next);
  } catch (e) {
    next(e);
  }
};