const mongoose = require('mongoose');

//shape data
const ordersSchema = new mongoose.Schema({
    CustomerId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    BookId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
    },
    initialDate: {
        type: Date,
        require: true
    },
    deliveryDate: {
        type: Date,
        require: true
    }
}, { timestamps: true });

const Orders = mongoose.model('orders', ordersSchema);

module.exports = Orders;
