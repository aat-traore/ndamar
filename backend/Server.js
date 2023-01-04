const express = require('express');
const cors = require('cors');
const app = express();
const users = require('./routes/UserRoute')
const cars = require('./routes/CarRoute')
const locations = require('./routes/ReserveRoute')
const Sales = require('./routes/VenteRoute')

port = process.env.PORT || 9000;

 
//---------------import des fichiers de configuratons-----------------
require ("dotenv").config({path: "./config/.env"});
require("./config/db");
//---------------import des routes---------------------------------
app.use(cors());
app.use(express.json())
app.use('/api',users)
app.use('/api',cars)
app.use('/api',locations)
app.use('/api',Sales)






//---------------création du SERVER----------------------------

app.listen(port, ()=>{
    console.log(`Server Running : ${port}`);
});