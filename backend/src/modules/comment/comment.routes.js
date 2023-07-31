const express = require('express');
const commentController = require('./comment.controller');
const commentRoutes = express.Router();

commentRoutes.get('/',commentController.getAllComment);
commentRoutes.get('/:id', commentController.getById);
commentRoutes.post('/', commentController.createComment);
commentRoutes.put('/:id', commentController.editComment);
commentRoutes.delete('/:id', commentController.deleteComment);

module.exports= commentRoutes;