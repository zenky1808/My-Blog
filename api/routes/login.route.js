const express = require('express');
const route = express.Router();
const { login } = require('../controller/auth.controller')

route.post('/', login);

module.exports = route;