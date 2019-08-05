const experss = require('express');

//IMPORT OUR MODEL SCHEMA
const driver = require('../models/driver');

//ROUTER module
const router = experss.Router();

// GET ALL THE DRIVERS (REMEMBER '/' is '/drivers' here)
router.get('/', async (req, res) => {
    try {
        const drivers = await driver.find(); //Find is mongoose method
        res.send(drivers);
    } catch (err) {
        res.json({ message:err });
    }
});

//GET A SINGLE DRIVER
router.get('/:driverId', async (req, res) => {  
    try {
        const singleDriver = await driver.findById(req.params.driverId); //FindById is mongoose method
        res.json(singleDriver);
    } catch (err) {
        res.json({ message:err });
    }
});

// SUBMIT A NEW DRIVER (REMEMBER '/' is '/drivers' here)
router.post('/', async (req, res) => {
    const driverItem = new driver({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        pesel: req.body.pesel,
        available: req.body.available,
        earnings: req.body.earnings,
        contract: req.body.contract,
        holidays_days: req.body.holidays_days,
    });

    try {
        const saveDriverItem = await driverItem.save(); //Save is mongoose method
        res.json(saveDriverItem);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE A SINGLE DRIVER
router.delete('/:driverId', async (req, res) => {
    try {
        const removeDriverItem = await driver.remove({_id: req.params.driverId}); //Remove is a mongoose method
        res.json(removeDriverItem);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;