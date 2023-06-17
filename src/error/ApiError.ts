class ApiError extends Error {
  statusCode: number

  constructor(statuCode: number, message: string | undefined, stack = '') {
    super(message)
    this.statusCode = statuCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export default ApiError
