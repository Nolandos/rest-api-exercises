const mongoose = require('mongoose');

//SCHEMA FOR DRIVER 
const driverSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    pesel: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    earnings: {
        type: Number,
        required: true
    },
    contract: {
        type: String,
        required: true
    },
    holidays_days: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('drivers', driverSchema);