const express = require('express');
const route = express.Router();

const siteController = require('../controllers/Site.controller');

route.get('/login', siteController.login)
route.get('/about', siteController.about);
route.get('/contact', siteController.contact);
route.get('/', siteController.index);

module.exports = route;