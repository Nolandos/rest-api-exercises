const mongoose = require('mongoose');

//SCHEMA FOR TRANSPORT ITEM
const transportSchema = mongoose.Schema({
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
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('transports', transportSchema);