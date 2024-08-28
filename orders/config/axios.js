require('dotenv').config
const axios = require("axios")

const GetInformationBookandCustomer = async(BookId, CustomerId) => {
    const resCustomer = await axios.get(`http://localhost:${process.env.PORT_CUS}/customers/${CustomerId}`);
    const resBook = await axios.get(`http://localhost:${process.env.PORT_BOOK}/book/${BookId}`);
  
    return {resCustomer, resBook}
}

module.exports = {
    GetInformationBookandCustomer
}