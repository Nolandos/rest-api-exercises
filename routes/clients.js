const experss = require('express');

//IMPORT OUR MODEL SCHEMA
const client = require('../models/client');

//ROUTER module
const router = experss.Router();

// GET ALL THE CLIENTS (REMEMBER '/' is '/clients' here)
router.get('/', async (req, res) => {
    try {
        const clients = await client.find(); //Find is mongoose method
        res.send(clients);
    } catch (err) {
        res.json({ message:err });
    }
});

//GET A SINGLE CLIENT
router.get('/:clientId', async (req, res) => {  
    try {
        const singleClient = await client.findById(req.params.clientId); //FindById is mongoose method
        res.json(singleClient);
    } catch (err) {
        res.json({ message:err });
    }
});

// SUBMIT A NEW CLIENTS (REMEMBER '/' is '/clients' here)
router.post('/', async (req, res) => {
    const clientItem = new client({
        name: req.body.name,
        hq_address: req.body.hq_address,
        chairman: req.body.chairman,
        phone_number: req.body.phone_number
    });

    try {
        const saveClientItem = await clientItem.save(); //Save is mongoose method
        res.json(saveClientItem);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE A SINGLE CLIENT
router.delete('/:clientId', async (req, res) => {
    try {
        const removeClientItem = await client.remove({_id: req.params.clientId}); //Remove is a mongoose method
        res.json(removeClientItem);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;