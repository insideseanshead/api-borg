const express = require('express');
require('dotenv').config();
// Express App Setup
// ==============================================
const app=express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

// Models for syncing
const db = require('./models');

// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Production CORS
// app.use(cors({
//     origin:[]
// }))

// DEV CORS
app.use(cors());

app.use('/', allRoutes);

db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT)
    });
});