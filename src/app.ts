import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'
const app: Application = express()

//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// class ApiError extends Error {
//   statusCode: number

//   constructor(statuCode: number, message: string | undefined, stack = '') {
//     super(message)
//     this.statusCode = statuCode
//     if (stack) {
//       this.stack = stack
//     } else {
//       Error.captureStackTrace(this, this.constructor)
//     }
//   }
// }

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // res.send('University Management Auth System Server connected')
  // throw new ApiError(400, 'oreh Allah')
  next('orehhh')
})

//global error handeler

// app.use((err, req: Request, res: Response, next: NextFunction) => {
//   if (err instanceof Error) {
//     res.status(400).json({ error: err })
//   } else {
//     res.status(500).json({ error: 'Something Want Wrong' })
//   }
// })

//Application Router

app.use('/api/v1/users', router)

export default app
