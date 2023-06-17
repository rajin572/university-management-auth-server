import express, { Application } from 'express'
import cors from 'cors'
import { UserRouter } from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
// import ApiError from './error/ApiError'
const app: Application = express()

//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application Router

app.use('/api/v1/users', UserRouter)

//Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, ' Error lagce re')
// })

//global error handeler

app.use(globalErrorHandler)

export default app
