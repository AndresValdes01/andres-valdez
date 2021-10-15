'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    codigo: String,
    nombre: String,
    email: String,
    rol: String,
    estado: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);