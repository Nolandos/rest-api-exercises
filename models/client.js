const mongoose = require('mongoose');

//SCHEMA FOR CLIENT 
const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hq_address: {
        type: String,
        required: true
    },
    chairman: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('clients', clientSchema);