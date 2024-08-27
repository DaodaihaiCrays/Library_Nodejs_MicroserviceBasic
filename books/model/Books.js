const mongoose = require('mongoose');

//shape data
const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    numberPage: {
        type: String,
        require: false
    },
    publisher: {
        type: String,
        require: false
    },

}, { timestamps: true });

const Books = mongoose.model('books', booksSchema);

module.exports = Books;
