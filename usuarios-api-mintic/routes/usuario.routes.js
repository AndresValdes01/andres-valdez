'use strict'
const express = require('express');
const api = express.Router();

const UsuarioCtrl = require('../controllers/usuario.controller');

api.get('/usuarios', UsuarioCtrl.getUsuarios);
api.post('/usuarios', UsuarioCtrl.registrarUsuario);

module.exports = api;