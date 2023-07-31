const express = require('express');
const userController = require('./user.controller');
const userRoutes = express.Router();

userRoutes.post('/register', userController.userRegister);
userRoutes.post('/login', userController.userLogin);
userRoutes.get('/all-users', userController.getAllUsers);



module.exports= userRoutes;