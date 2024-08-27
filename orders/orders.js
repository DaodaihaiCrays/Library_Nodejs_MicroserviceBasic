const express = require('express')
require('dotenv').config()
const connection = require('./config/database')
const {
    CreateOrdersController,
    GetAllOrdersController,
    GetOrdersByIdController
  } = require("./controller/ordersController")

const app = express()


app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded( )); //Parse URL-encoded bodies


;(async () => {
    try{
      // Cách dùng cho mongoose
      await connection()
    } catch(error) {
      console.log(error)
    } 
})()

app.get('/', function (req, res) {
  res.send('Hi order')
})

app.post('/orders', CreateOrdersController)
app.get('/orders', GetAllOrdersController)
app.get('/orders/:id', GetOrdersByIdController)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})