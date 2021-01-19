const express = require('express');
const route = express.Router();
const { getUser, editUser, createUser, deleteUser, getOneUser } = require('../controller/user.controller')

route.get('/', getUser);
route.get('/:id', getOneUser);
route.post('/', createUser);
route.put('/:id', editUser);
route.delete('/:id', deleteUser);



module.exports = route;