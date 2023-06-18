import express, { Application } from 'express'
// import express, { Application, NextFunction, Request, Response } from 'express'
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

// Testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // res.send('University Management Application Auth system')
//   // Promise.reject(new Error('Error lagce re'))
//   // console.log(x)
//   throw new ApiError(400, 'khaice re')
//   // next('c')
// })

//global error handeler

app.use(globalErrorHandler)

export default app
