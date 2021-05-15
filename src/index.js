const express = require('express'); //require express module
const app = express(); //start the app with the express function
const port = 4000; //setup port at 4000
const dbSetup = require ('./database/setup');
const eventRoutes  = require('./routes/eventRoutes');

app.use(express.json())

// setup DB
dbSetup();
app.use(eventRoutes);



app.listen(port,()=>console.log(`app listening on port ${port}`)); // have app listen to port 4000 and send response back to server