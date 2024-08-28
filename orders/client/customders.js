require('dotenv').config
const axios = require("axios")

const GetCustomerID = async(id) => {
    const resCustomer = await axios.get(process.env.URL_CUSTOMER + id)

    return resCustomer.data['data']
    
}

module.exports = {
    GetCustomerID
}