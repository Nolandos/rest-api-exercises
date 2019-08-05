const experss = require('express');

//IMPORT OUR MODEL SCHEMA
const vehicle = require('../models/vehicle');

//ROUTER module
const router = experss.Router();

// GET ALL THE VEHICLES (REMEMBER '/' is '/vehicles' here)
router.get('/', async (req, res) => {
    try {
        const vehicles = await vehicle.find(); //Find is mongoose method
        res.send(vehicles);
    } catch (err) {
        res.json({ message:err });
    }
});

//GET A SINGLE VEHICLE ITEM 
router.get('/:vehicleId', async (req, res) => {  
    try {
        const singleVehicle = await vehicle.findById(req.params.vehicleId); //FindById is mongoose method
        res.json(singleVehicle);
    } catch (err) {
        res.json({ message:err });
    }
});

// SUBMIT A NEW VEHICLE (REMEMBER '/' is '/vehicles' here)
router.post('/', async (req, res) => {
    const vehicleItem = new vehicle({
        car_brand: req.body.car_brand,
        car_model: req.body.car_model,
        fuel: req.body.fuel,
        engine: req.body.engine,
        engine_power: req.body.engine_power,
        car_mileage: req.body.car_mileage,
        year_of_production: req.body.year_of_production,
        gear_box: req.body.gear_box,
        capacity: req.body.capacity
    });

    try {
        const saveVehicleItem = await vehicleItem.save(); //Save is mongoose method
        res.json(saveVehicleItem);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE A SINGLE VEHICLE
router.delete('/:vehicleId', async (req, res) => {
    try {
        const removeVehicleItem = await vehicle.remove({_id: req.params.vehicleId}); //Remove is a mongoose method
        res.json(removeVehicleItem);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;