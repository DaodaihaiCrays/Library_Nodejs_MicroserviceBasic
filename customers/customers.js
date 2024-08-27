const express = require('express')
require('dotenv').config()
const connection = require('./config/database')
const {
  CreateCustomersController ,
  GetAllCustomersController,
  GetCustomersByIdController,
  DeleteCustomersByIdController
} = require("./controller/customersController")

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
  res.send('Hi cus')
})

app.post('/customers', CreateCustomersController)
app.get('/customers', GetAllCustomersController)
app.get('/customers/:id', GetCustomersByIdController)
app.delete('/customers/:id', DeleteCustomersByIdController)


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})