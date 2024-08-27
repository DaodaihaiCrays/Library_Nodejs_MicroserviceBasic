const Books = require("../model/Books")
const {
    CreateBooksService,
    GetAllBooksService,
    GetBooksByIdService,
    DeleteBooksByIdService
} = require("../service/booksService")

const CreateBooksController = async(req, res) => {
    console.log(req.body)
    const result = await CreateBooksService(req.body)
    
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

const GetAllBooksController = async(req, res) => {

    const result = await GetAllBooksService()
    
    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't get all books"
        })    
}

const GetBooksByIdController = async(req, res) => {
    const result = await GetBooksByIdService(req.params.id)

    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't get the book by id"
        })  
}

const DeleteBooksByIdController = async(req, res) => {
    const result = await DeleteBooksByIdService(req.params.id)

    if(result!=null)
        return res.status(200).json({
            error: 0,
            data: result
        })
    else 
        return res.status(400).json({
            error: 1,
            msg: "Don't get the book by id"
        })  
}

module.exports = {
    CreateBooksController,
    GetAllBooksController,
    GetBooksByIdController,
    DeleteBooksByIdController
}