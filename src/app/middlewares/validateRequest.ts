import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

const ValidateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // req-validation
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      })
      return next()
    } catch (error) {
      next(error)
    }
  }

export default ValidateRequest
