const mongoose = require('mongoose')
require('dotenv').config


const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST).then(() => {
        console.log("Database bookservice is connected")
    });
  } catch (error) {
    console.log('Error connect mongo')
  }
}


module.exports = connection