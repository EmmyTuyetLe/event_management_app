const express = require('express'); //require express module
const app = express(); //start the app with the express function
require('dotenv').config();

const port = process.env.PORT;
const dbSetup = require ('./database/setup');

//require routes
const eventRoutes  = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');

//SEEDERS
const { seedAdmin } = require('./seeders/admin');
app.use(express.json());

// setup DB
dbSetup();
app.use('/auth', authRoutes);
app.use(eventRoutes);



app.listen(port,()=>console.log(`app listening on port ${port}`)); // have app listen to port 5000 and send response back to server