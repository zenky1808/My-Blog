const express = require('express');
const route = express.Router();

const newController = require('../controllers/New.controller');

route.get('/create', newController.create);
route.get('/:slug', newController.show);
// route.get('/', newController.index);

route.post('/add', newController.add);

module.exports = route;