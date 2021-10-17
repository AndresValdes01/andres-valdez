'use strict'
const express = require('express');
const api = express.Router();

const UsuarioCtrl = require('../controllers/usuario.controller');
const VentasCtrl = require('../controllers/ventas.controller');
const Producto = require('../controllers/productos.controller');

api.get('/usuarios', UsuarioCtrl.getUsuarios);
api.post('/usuarios', UsuarioCtrl.registrarUsuario);

api.get('/productos', ProductoCtrl.getUsproductos);
api.post('/productos', ProductoCtrl.registrarProducto);

api.get('/gestionventas', VentasCtrl.getVentas);
api.post('/gestionventas', VentasCtrl.registrarVenta);
api.put('/gestionventas', VentasCtrl.updateVenta);
api.delete('/gestionventas', VentasCtrl.deleteVenta);

api.get('/gestionproductos', ProductosCtrl.getProductos);
api.post('/gestionproductos', ProductosCtrl.registrarProducto);
api.put('/gestionproductos', ProductosCtrl.updateProducto);
api.delete('/gestionproductos', ProductosCtrl.deleteProducto);

module.exports = api;