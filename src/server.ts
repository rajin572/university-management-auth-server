import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, logger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  console.log('uncaught expression detected');
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database Connected Successfully');

    server = app.listen(config.port, () => {
      logger.info(`Application Listening On Port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('Failed to connect database', err);
  }

  process.on('unhandledRejection', error => {
    errorLogger.error('Unhandled error caught', error);
    if (server) {
      errorLogger.error('Serrver Running but crused');
      server.close(() => {
        errorLogger.error(error);
        errorLogger.error('Server Closed');

        process.exit(1);
      });
    } else {
      errorLogger.error('Serrver Closed');
      process.exit(1);
    }
  });
}

// console.log(x)

bootstrap();

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received');
  if (server) {
    server.close();
  }
});
