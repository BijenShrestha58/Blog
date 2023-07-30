const express = require('express');
const blogController = require('./blog.controller');
const blogRoutes = express.Router();

blogRoutes.get('', blogController.getAllBlog);
// todoRoutes.get('/status/:status', blogController.getByStatus);
// todoRoutes.post('', blogController.createTodo);
// todoRoutes.put('/:id', blogController.updateTodo);
// todoRoutes.delete('/:id', blogController.deleteTodo);

module.exports= blogRoutes;