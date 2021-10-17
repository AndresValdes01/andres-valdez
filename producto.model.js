'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
    ID_producto: String,
    Descripcion_producto: String,
    preciounidad: String,
    cantidad: String,
    estado: String,
    buscarproducto: String,
    crearproducto:String,
    registrarproducto:String,
    disponible:String,
});

module.exports = mongoose.model('Producto', ProductoSchema);