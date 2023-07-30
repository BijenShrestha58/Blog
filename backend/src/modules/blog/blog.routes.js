const express = require('express');
const blogController = require('./blog.controller');
const todoRoutes = express.Router();

todoRoutes.get('/:id', blogController.getById);
// todoRoutes.get('/status/:status', blogController.getByStatus);
// todoRoutes.post('', blogController.createTodo);
// todoRoutes.put('/:id', blogController.updateTodo);
// todoRoutes.delete('/:id', blogController.deleteTodo);

module.exports= todoRoutes;