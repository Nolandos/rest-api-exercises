const mongoose = require('mongoose');

//SCHEMA FOR ORDER ITEM
const orderSchema = mongoose.Schema({
    source_address: {
        type: String,
        required: true
    },
    destination_address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    driver: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    vehicle: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        default: 'low'
    }
});

module.exports = mongoose.model('orders', orderSchema);