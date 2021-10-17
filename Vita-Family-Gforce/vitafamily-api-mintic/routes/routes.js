'use strict'
const express = require('express');
const api = express.Router();

const UsuarioCtrl = require('../controllers/usuario.controller');
const VentasCtrl = require('../controllers/ventas.controller');

api.get('/usuarios', UsuarioCtrl.getUsuarios);
api.post('/usuarios', UsuarioCtrl.registrarUsuario);

api.get('/gestionventas', VentasCtrl.getVentas);
api.post('/gestionventas', VentasCtrl.registrarVenta);
api.put('/gestionventas', VentasCtrl.updateVenta);
api.delete('/gestionventas', VentasCtrl.deleteVenta);

module.exports = api;