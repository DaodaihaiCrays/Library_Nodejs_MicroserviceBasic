const Customers = require("../model/Customers")
const {
    CreateCustomersService,
    GetAllCustomersService,
    GetCustomersByIdService,
    DeleteCustomersByIdService
} = require("../service/customersService")

const CreateCustomersController = async(req, res) => {
    const result = await CreateCustomersService(req.body)
    
    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't create the book"
        })  
}

const GetAllCustomersController = async(req, res) => {

    const result = await GetAllCustomersService()
    
    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't get all Customers"
        })    
}

const GetCustomersByIdController = async(req, res) => {
    const result = await GetCustomersByIdService(req.params.id)

    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't get the customer by id"
        })  
}

const DeleteCustomersByIdController = async(req, res) => {
    const result = await DeleteCustomersByIdService(req.params.id)

    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't get the customer by id"
        })  
}

module.exports = {
    CreateCustomersController,
    GetAllCustomersController,
    GetCustomersByIdController,
    DeleteCustomersByIdController
}