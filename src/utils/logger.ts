import { Logger } from 'winston';
import { appConfig } from '../config/constants';
import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.json(),
  level: 'info',
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf((info) => `${appConfig.service} ${info.timestamp} ${info.level}: ${info.message}`),),
    level: 'debug',
  }));

export const log: Logger = logger;
