const Orders = require("../model/Orders")
const axios = require("axios")
const {
    GetInformationBookandCustomer
} = require("../config/axios")

const { GetCustomerID } = require("../client/customders")
const { GetBookID } = require("../client/books")

const CreateOrdersService = async (orders) => {
    try {
        const result = await Orders.create(orders) 
        return result 
    } catch (error) {
        console.error('Error creating orders:', error) 
        return null  
    }
}

const GetAllOrdersService = async(data) => {
    try {
        const result = await Orders.find();

        for (let i = 0; i < result.length; i++) {

            const customer = await GetCustomerID(result[i]['CustomerId'].toString())
            const book = await GetBookID(result[i]['BookId'].toString()) 
           
            if(!customer || !book)
                return null

            result[i] = {
                ...result[i]._doc, // để xử lý kq trả về không chứa các field dư của Mongoose
                CustomerId: customer,
                BookId: book,
            };
        }

        return result;
    } catch (error) {
        console.error('Error fetching all Orders:', error);
        return null;
    }
};

const GetOrdersByIdService = async(id) => {
    try {
        const result = await Orders.findById(id) 
   
        if (!result) {
            throw new Error('Customer not found') 
        }
        
        const customer = await GetCustomerID(result['CustomerId'].toString())
        const book = await GetBookID(result['BookId'].toString()) 

        const nameCustomer = customer['name']
        const nameBook = book['title']
        
        if(!nameCustomer || !nameBook)
            return null
        return {nameCustomer, nameBook} 
    } catch (error) {
        console.error(`Error fetching Order with ID ${id}:`, error) 
        return null  
    }
}



module.exports = {
    CreateOrdersService,
    GetAllOrdersService,
    GetOrdersByIdService,
}