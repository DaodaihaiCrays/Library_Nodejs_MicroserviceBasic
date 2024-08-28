require('dotenv').config
const axios = require("axios")

const GetInformationBookandCustomer = async(BookId, CustomerId) => {

    const resCustomer = await axios.get(process.env.URL_CUSTOMER + CustomerId)
    const resBook = await axios.get(process.env.URL_BOOK+ BookId)
    return {
        customer: resCustomer.data['data'],
        book: resBook.data['data']
    }
}

module.exports = {
    GetInformationBookandCustomer
}