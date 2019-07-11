const experss = require('express');

//IMPORT OUR MODEL SCHEMA
const transport = require('../models/transport');

//ROUTER module
const router = experss.Router();

// GET ALL THE TRANSPORTS (REMEMBER '/' is '/transports' here)
router.get('/', async (req, res) => {
    try {
        const transports = await transport.find(); //Find is mongoose method
        res.send(transports);
    } catch (err) {
        res.json({ message:err });
    }
});

//GET A SINGLE TRANSPORT ITEM 
router.get('/:transportId', async (req, res) => {  
    try {
        const singleTransport = await transport.findById(req.params.transportId); //FindById is mongoose method
        res.json(singleTransport);
    } catch (err) {
        res.json({ message:err });
    }
});

// SUBMIT A NEW TRANSPORT (REMEMBER '/' is '/transports' here)
router.post('/', async (req, res) => {
    const transportItem = new transport({
        source_address: req.body.source_address,
        destination_address: req.body.destination_address,
        price: req.body.price
    });

    try {
        const saveTransportItem = await transportItem.save(); //Save is mongoose method
        res.json(saveTransportItem);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE A SINGLE TRANSPORT 
router.delete('/:transportId', async (req, res) => {
    try {
        const removeTransportItem = await transport.remove({_id: req.params.transportId}); //Remove is a mongoose method
        res.json(removeTransportItem);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;