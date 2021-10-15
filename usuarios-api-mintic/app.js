'use strict'

const express = require ('express');

const apiUsuarios = require('./routes/usuario.routes');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', apiUsuarios);

module.exports=app