const express = require("express");
const blogController = require("./blog.controller");
const blogRoutes = express.Router();

blogRoutes.get("/user/:username", blogController.getByUser);
blogRoutes.post("/blogtypes", blogController.createBlogtype);
blogRoutes.get("/blogtypes", blogController.getBlogTypes);

blogRoutes.get("/", blogController.getAllBlog);
// blogRoutes.get('/type/:id',blogController.getBlogsByBlogTypeId);
// blogRoutes.get('/user-id/:id',blogController.getBlogsByUserId);
blogRoutes.get("/:id", blogController.getById);
blogRoutes.post("/", blogController.createBlog);
blogRoutes.put("/:id", blogController.editBlog);
blogRoutes.delete("/:id", blogController.deleteBlog);

module.exports = blogRoutes;
