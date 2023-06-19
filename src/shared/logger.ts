import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

//Custom logger
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const secound = date.getSeconds();

  return `${date.toDateString()} - ${hour}:${minutes}:${secound} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'Dev Rajin' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        'phu-%DATE%-success.log'
      ),
      datePattern: 'DD-MM-YYYY',
      zippedArchive: true,
      maxSize: '50m',
      maxFiles: '1d',
    }),
  ],
});

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'Dev Rajin' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        'phu-%DATE%-error.log'
      ),
      datePattern: 'DD-MM-YYYY',
      zippedArchive: true,
      maxSize: '50m',
      maxFiles: '1d',
    }),
  ],
});

export { logger, errorLogger };
