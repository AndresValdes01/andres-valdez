'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
    descripcion: String,
    precioUnidad: Number,
    cantidad: Number,
    estado: String
});

module.exports = mongoose.model('Producto', ProductoSchema);