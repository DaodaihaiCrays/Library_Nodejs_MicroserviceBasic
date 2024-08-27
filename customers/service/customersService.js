const  Customers = require("../model/Customers")

const CreateCustomersService = async ( Customers) => {
    try {
        const result = await  Customers.create( Customers) 
        return result 
    } catch (error) {
        console.error('Error creating  Customers:', error) 
        return null  
    }
}

const GetAllCustomersService = async() => {
    try {
        const result = await  Customers.find() 
        return result 
    } catch (error) {
        console.error('Error fetching all Customer:', error) 
        return null  
    }
}

const GetCustomersByIdService = async(id) => {
    try {
        const result = await  Customers.findById(id) 
        if (!result) {
            throw new Error('Customer not found') 
        }
        return result 
    } catch (error) {
        console.error(`Error fetching customer with ID ${id}:`, error) 
        return null  
    }
}

const DeleteCustomersByIdService = async(id) => {
    try {
        const result = await  Customers.findByIdAndDelete(id)
        if (!result) {
            throw new Error('Customer not found') 
        }
        return result 
    } catch (error) {
        console.error(`Error fetching customer with ID ${id}:`, error) 
        return null  
    }
}

module.exports = {
    CreateCustomersService,
    GetAllCustomersService,
    GetCustomersByIdService,
    DeleteCustomersByIdService
}