import express, { Application, Request, Response } from 'express'
const app: Application = express()
const port = 3000

app.get('/', (req:Request, res:Response) => {
  res.send('University Management Server Auth System connected')
})

export default app