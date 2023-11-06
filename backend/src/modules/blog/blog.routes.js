const express = require("express");
const blogController = require("./blog.controller");
const blogRoutes = express.Router();
const authMiddleWare = require("../user/auth.middleware");
blogRoutes.post("", blogController.createBlog);
blogRoutes.put("/:id", blogController.editBlog);
blogRoutes.delete("/:id", blogController.deleteBlog);

blogRoutes.get("/user/:username", blogController.getByUser);
blogRoutes.get("/:id", authMiddleWare, blogController.getById);
blogRoutes.post("/blogtypes", blogController.createBlogtype);
blogRoutes.get("/blogtypes", blogController.getBlogTypes);

blogRoutes.get("/", blogController.getAllBlog);
// blogRoutes.get('/type/:id',blogController.getBlogsByBlogTypeId);
// blogRoutes.get('/user-id/:id',blogController.getBlogsByUserId);

module.exports = blogRoutes;
