import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
//packages
import 'express-async-errors'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'
import cors from 'cors'
<<<<<<< HEAD
=======

const app = express()
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connect.js'

>>>>>>> b7b2a091872695c8f899c9de6060ba5ce018affb
//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'
//routers
import authRouter from './routers/authRouter.js'
import productRouter from './routers/productRouter.js'
import addressRouter from './routers/addressRouter.js'
import paymentRouter from './routers/paymentRouter.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/connect.js'

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')))
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(express.json())

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginEmbedderPolicy: false,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        'https://checkout.stripe.com',
        'js.stripe.com',
        'unsafe-inline',
      ],
      fontSrc: [
        "'self'",
        'db.onlinewebfonts.com',
        'fonts.googleapis.com',
        'fonts.gstatic.com',
      ],
      connectSrc: ["'self'", 'https://checkout.stripe.com'],
      frameSrc: ['https://checkout.stripe.com', 'https://*.stripe.com'],
      imgSrc: ["'self'", 'data:', 'https://via.placeholder.com'],
    },
  })
)

app.use(xss())
app.use(mongoSanitize())
app.use(cors())

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/address', authenticateUser, addressRouter)
app.use('/api/v1/payment', authenticateUser, paymentRouter)

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

// only when ready to deploy

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5002

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
  } catch (error) {
    console.log('error launching server')
  }
  app.listen(port, console.log(`Server listening on port ${port}...`))
}
start()
