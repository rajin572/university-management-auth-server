import express, { Application } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // res.send('University Management Auth System Server connected')
//   throw new ApiError(400, 'oreh Allah')
//   // next('orehhh')
// })

//Application Router

app.use('/api/v1/users', router)

//global error handeler

app.use(globalErrorHandler)

export default app
