require('dotenv').config
const axios = require("axios")

const GetBookID = async(id) => {
    const resBook = await axios.get(process.env.URL_BOOK+ id);

    return resBook.data['data']
}

module.exports = {
    GetBookID
}