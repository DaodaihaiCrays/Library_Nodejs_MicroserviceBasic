const Orders = require("../model/Orders")
const {
    CreateOrdersService,
    GetAllOrdersService,
    GetOrdersByIdService
} = require("../service/ordersService")

const CreateOrdersController = async(req, res) => {
    const result = await CreateOrdersService(req.body)
    
    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't create the order"
        })  
}

const GetAllOrdersController = async(req, res) => {

    const result = await GetAllOrdersService()
    
    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't get all orders"
        })    
}

const GetOrdersByIdController = async(req, res) => {

    const result = await GetOrdersByIdService(req.params.id)
    
    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't get order by id"
        })    
}


module.exports = {
    CreateOrdersController,
    GetAllOrdersController,
    GetOrdersByIdController
}