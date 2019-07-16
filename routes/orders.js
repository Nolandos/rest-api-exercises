const experss = require('express');

//IMPORT OUR MODEL SCHEMA
const order = require('../models/order');

//ROUTER module
const router = experss.Router();

// GET ALL THE ORDERS (REMEMBER '/' is '/orders' here)
router.get('/', async (req, res) => {
    try {
        const orders = await order.find(); //Find is mongoose method
        res.send(orders);
    } catch (err) {
        res.json({ message:err });
    }
});

//GET A SINGLE ORDER ITEM 
router.get('/:orderId', async (req, res) => {  
    try {
        const singleOrder = await order.findById(req.params.orderId); //FindById is mongoose method
        res.json(singleOrder);
    } catch (err) {
        res.json({ message:err });
    }
});

// SUBMIT A NEW ORDER (REMEMBER '/' is '/orders' here)
router.post('/', async (req, res) => {
    const orderItem = new order({
        source_address: req.body.source_address,
        destination_address: req.body.destination_address,
        price: req.body.price,
        driver: req.body.driver,
        customer: req.body.customer,
        active: req.body.active,
        vehicle: req.body.vehicle,
        priority: req.body.priority
    });

    try {
        const saveOrderItem = await orderItem.save(); //Save is mongoose method
        res.json(saveOrderItem);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE A SINGLE ORDER
router.delete('/:orderId', async (req, res) => {
    try {
        const removeOrderItem = await order.remove({_id: req.params.orderId}); //Remove is a mongoose method
        res.json(removeOrderItem);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;