const express = require('express');
const blogController = require('./blog.controller');
const blogRoutes = express.Router();

blogRoutes.get('/',blogController.getAllBlog);
// blogRoutes.get('/:id', blogController.getById);
// blogRoutes.get('/status/:status', blogController.getByStatus);
// blogRoutes.post('', blogController.createBlog);
// blogRoutes.put('/:id', blogController.updateBlog);
// blogRoutes.delete('/:id', blogController.deleteBlog);

module.exports= blogRoutes;