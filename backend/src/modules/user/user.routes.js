const express = require("express");
const userController = require("./user.controller");
const userRoutes = express.Router();

userRoutes.post("/register", userController.userRegister);
userRoutes.post("/login", userController.userLogin);
userRoutes.get("/all-users", userController.getAllUsers);
userRoutes.delete("/:id", userController.deleteUser);

module.exports = userRoutes;
