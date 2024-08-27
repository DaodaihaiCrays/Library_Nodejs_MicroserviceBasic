const Orders = require("../model/Orders")
const axios = require("axios")

const CreateOrdersService = async (orders) => {
    try {
        console.log(orders)
        const result = await Orders.create(orders) 
        return result 
    } catch (error) {
        console.error('Error creating orders:', error) 
        return null  
    }
}

const GetAllOrdersService = async(data) => {
    try {
        const result = await Orders.find()
        return result 
    } catch (error) {
        console.error('Error fetching all Orders:', error) 
        return null 
    }
}

const GetOrdersByIdService = async(id) => {
    try {
        const result = await Orders.findById(id) 
        if (!result) {
            throw new Error('Customer not found') 
        }
        
        const resCustomer = await axios.get("http://localhost:3001/customers/" + result['CustomerId'].toString());
        let nameCustomer = resCustomer.data['data']['name']
        
        const resBook = await axios.get("http://localhost:3000/book/" + result['BookId'].toString());
        let nameBook = resBook.data['data']['title']
        
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