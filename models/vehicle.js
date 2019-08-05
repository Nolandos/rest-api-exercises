const mongoose = require('mongoose');

//SCHEMA FOR VEHICLE ITEM
const vehicleSchema = mongoose.Schema({
    car_brand: {
        type: String,
        required: true
    },
    car_model: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    engine_power: {
        type: String,
        required: true
    },
    car_mileage: {
        type: Number,
        required: true
    },
    year_of_production: {
        type: Number,
        required: true
    },
    gear_box: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true       
    }
});

module.exports = mongoose.model('vehicles', vehicleSchema);