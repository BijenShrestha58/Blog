const express = require('express');
const blogController = require('./blog.controller');
const blogRoutes = express.Router();

blogRoutes.get('/user/:username', blogController.getByUser);

blogRoutes.get('/',blogController.getAllBlog);
blogRoutes.get('/:id', blogController.getById);
blogRoutes.post('/', blogController.createBlog);
blogRoutes.put('/:id', blogController.editBlog);
blogRoutes.delete('/:id', blogController.deleteBlog);

module.exports= blogRoutes;