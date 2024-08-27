const mongoose = require('mongoose');

//shape data
const customersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Customers = mongoose.model('customers', customersSchema);

module.exports = Customers;
