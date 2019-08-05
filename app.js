const experss = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Import Routes
const ordersRoute  = require('./routes/orders');
const vehiclesRoute  = require('./routes/vehicles');
const driversRoute  = require('./routes/drivers');
const clientsRoute  = require('./routes/clients');

//Create app 
const app = experss();

//Middlewares
app.use(cors())
app.use(bodyParser.json());
app.use('/orders', ordersRoute);
app.use('/vehicles', vehiclesRoute);
app.use('/drivers', driversRoute);
app.use('/clients', clientsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('Siema');
});

//Connect with Data Base
mongoose.connect(
    process.env.DB_CONNECTION,  //Ukryta adres do mojego mongodb w .env
    { useNewUrlParser: true }, 
    () => console.log('Connected to MongoDB')
);

//Listening on PORT
app.listen(8080);