const express = require('express')
require('dotenv').config()
const connection = require('./config/database')
const {
  CreateBooksController ,
  GetAllBooksController,
  GetBooksByIdController,
  DeleteBooksByIdController
} = require("./controller/booksController")


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
  res.send('Hi book')
})

app.post('/books', CreateBooksController)
app.get('/books', GetAllBooksController)
app.get('/book/:id', GetBooksByIdController)
app.delete('/book/:id', DeleteBooksByIdController)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})