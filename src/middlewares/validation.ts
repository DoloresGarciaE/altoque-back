interface ValidRequestData {
  params?: any;
  query?: any;
  body?: any;
}

interface ValidatorMiddleware {
  paramsSchema?: any;
  querySchema?: any;
  bodySchema?: any;
}
export const validation = ({ paramsSchema, querySchema, bodySchema }: ValidatorMiddleware) => (req, res, next) => {
  const data: ValidRequestData = {};

  if (paramsSchema) {
    const { error: paramsError, value: params } = paramsSchema.validate(req.params);
    if (paramsError) return next(paramsError.message);
    data.params = params;
  }
  
  if(querySchema) {
    const { error: queryError, value: query } = querySchema.validate(req.query);
    if (queryError) return next(queryError.message);
    data.query = query;
  }

  if(bodySchema) {
    const { error: bodyError, value: body } = bodySchema.validate(req.body);
    if (bodyError) return next(bodyError.message);   
    data.body = body;
  }

  req.data = data;

  next();
};