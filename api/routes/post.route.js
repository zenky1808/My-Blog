const express = require('express');
const route = express.Router();
const { getPost, getPostId, putPost, createPost, deletePost } = require('../controller/post.controller')

route.get('/', getPost);
route.get('/:id', getPostId);
route.post('/', createPost);
route.put('/:id', putPost);
route.delete('/:id', deletePost);



module.exports = route;