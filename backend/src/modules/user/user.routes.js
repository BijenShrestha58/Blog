const express = require('express');
const userController = require('./user.controller');
const userRoutes = express.Router();

userRoutes.post('/register', userController.userRegister);
userRoutes.post('/login', userController.loggingIn);


module.exports= userRoutes;