import { getDB } from '../services/db';

export const useDb = async (req, res, next) => {  
  try {
    req.db = await getDB();
    next();
  } catch (e) {
    next(e);
  }
};
