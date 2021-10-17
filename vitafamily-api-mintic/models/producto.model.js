'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
    id: String,
    Descripcion: String,
    preciounidad: Number,
    cantidad: Number,
    estado: String
});

module.exports = mongoose.model('Producto', ProductoSchema);