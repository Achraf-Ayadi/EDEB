const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')
const cors = require('cors')

const mongoose = require('mongoose')
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connection Successfull!'))
  .catch((err) => {
    console.log(err)
  })

app.use(cors())
app.use(express.json())
app.use('/api_a/auth', authRoute)
app.use('/api_a/users', userRoute)
app.use('/api_a/products', productRoute)
app.use('/api_a/carts', cartRoute)
app.use('/api_a/orders', orderRoute)
app.use('/api_a/checkout', stripeRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running!')
})
