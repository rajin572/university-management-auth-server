import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database Connected Successfully')

    app.listen(config.port, () => {
      logger.info(`Application Listening On Port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Failed to connect database', err)
  }
}

bootstrap()
