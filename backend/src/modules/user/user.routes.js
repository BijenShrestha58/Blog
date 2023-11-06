const express = require("express");
const userController = require("./user.controller");
const userRoutes = express.Router();
const authMiddleWare = require("./auth.middleware");

userRoutes.post("/register", userController.userRegister);
userRoutes.post("/login", userController.userLogin);
userRoutes.get("/all-users", userController.getAllUsers);
userRoutes.delete("/:id", userController.deleteUser);
userRoutes.get("/me", authMiddleWare, userController.getMyDetails);

module.exports = userRoutes;
