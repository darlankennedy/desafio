require("dotenv").config();
const porta = process.env.HOST_SERVER_DEV
const express   = require('express');
const app       = express();
const consign   = require('consign'); 
const db        = require('./api/database/index')
const { Model } = require('objection');
const path = require('path');

app.db = db
Model.knex(app.db)

consign({ cwd: path.join(__dirname, 'api') })
    .then('validations')
    .include('models')
    .then('controllers')
    .include('/config/Middleware.js')
    .include('/routes/routes.js')
    .into(app)

app.listen(porta,'localhost', () =>{
    console.log("... port %d in %s mode " +porta);
});





