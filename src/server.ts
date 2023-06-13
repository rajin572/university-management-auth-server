import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database Connected Successfully')

    app.listen(config.port, () => {
      console.log(`Application Listening On Port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect database', err)
  }
}

bootstrap()
