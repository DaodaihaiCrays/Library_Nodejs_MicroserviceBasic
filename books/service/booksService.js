const Books = require("../model/Books")

const CreateBooksService = async (books) => {
    try {
        const result = await Books.create(books) 
        return result 
    } catch (error) {
        console.error('Error creating books:', error) 
        return null  
    }
}

const GetAllBooksService = async() => {
    try {
        const result = await Books.find() 
        return result 
    } catch (error) {
        console.error('Error fetching all books:', error) 
        return null  
    }
}

const GetBooksByIdService = async(id) => {
    try {
        const result = await Books.findById(id) 
        if (!result) {
            throw new Error('Book not found') 
        }
        return result 
    } catch (error) {
        console.error(`Error fetching book with ID ${id}:`, error) 
        return null  
    }
}

const DeleteBooksByIdService = async(id) => {
    try {
        const result = await Books.findByIdAndDelete(id)
        if (!result) {
            throw new Error('Book not found') 
        }
        return result 
    } catch (error) {
        console.error(`Error fetching book with ID ${id}:`, error) 
        return null  
    }
}

module.exports = {
    CreateBooksService,
    GetAllBooksService,
    GetBooksByIdService,
    DeleteBooksByIdService
}