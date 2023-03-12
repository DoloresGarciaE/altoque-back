import { Sequelize } from 'sequelize';
import { dbSecrets } from '../config/keys';

let sequelize;

export async function getDB() {  
  if (sequelize) return sequelize;
  
  sequelize = new Sequelize(dbSecrets.connectionString);
  return sequelize.authenticate();
}
