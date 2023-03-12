import './traces';
import { app } from './app';
import { appConfig } from './config/constants';
import { log } from './utils/logger';

// start the server
app.listen(
  appConfig.port,
  () => log.info(`API is running on PORT ${appConfig.port}`)
);
