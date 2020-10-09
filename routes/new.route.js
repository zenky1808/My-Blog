const express = require('express');
const route = express.Router();

const newController = require('../controllers/New.controller');

route.get('/', newController.index)

module.exports = route;