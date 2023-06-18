<h3>Installing</h3>

1. npm init
2. yarn add -D typescript
3. yarn add mongoose
4. yarn add express
5. yarn add yarn add -D @types/express
6. tsc --init
7. yarn add dotenv
8. yarn add cors
9. yarn add -D @types/cors
10. yarn add ts-node-dev --dev
11. yarn add winston
12. yarn add zod

<h3>Error Handling</h3>
1. extends an class from Error <br/>
2. crate an globalErrorHandler fucntion an use it on app.js and use it api.use(globalErrorHandler) <br/>
3. now check the error is validationError or not. and create an handler for mongoose validation error exp.(handleValidationError). if the condition is true then run the function and recive the values. <br/>
<br/>
4. if there ar async error then the server will cursh to handle it we need to run unhandledRejection process. <br/>
5. if there is an uncaughtException error we need to run uncaughtException process. <br/>
6. and also we need to run SIGTERM process. <br/>
