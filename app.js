const experss = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Create app and use Middleware for json 
const app = experss();
app.use(bodyParser.json());



//Import Routes
const transportsRoute  = require('./routes/transports');

//Middleware
app.use('/transports', transportsRoute);

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