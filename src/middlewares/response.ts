export const responseHandlerMiddleware = (req, res, next) => {
  res.status(200).json({ data: res.data });
};
