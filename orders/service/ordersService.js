const Orders = require("../model/Orders")

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
        return result 
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