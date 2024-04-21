const express = require('express')
const app = express()
require("./configuration/configuration")
const passport = require("passport");
const foireRoute=require('./routes/foire')
const eventRoute=require('./routes/evenement')
const standRoute=require('./routes/stand')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/user');
const reservationRoute = require('./routes/reservation');

const cors = require('cors'); // Ajout du middleware CORS
app.get('/', (req, res) => {
res.send('Hello World! Flesk consulting')
})
app.listen(3000,()=>{ // definir port 
    console.log("Server Work!");
})
app.use(express.json())//permet express utilise json 

app.use(cors()); // Utilisation du middleware CORS pour autoriser les requêtes cross-origin

/* passport */
app.use(passport.initialize())
require('./security/passport')(passport)


//SWAGGER
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/foire', foireRoute );
app.use('/event',eventRoute);
app.use('/stand',standRoute);
app.use('/auth',authRoute);
app.use('/users',userRoute);
app.use('/reservation',reservationRoute);
app.use("/getimage",express.static('./generator'))