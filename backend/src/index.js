const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
// const axios = require('axios')
const cors = require("cors");
const blogRoutes = require("./modules/blog/blog.routes");
const userRoutes = require("./modules/user/user.routes");
const commentRoutes = require("./modules/comment/comment.routes");

// const todoController = require('./modules/todo/todo.controller')
app.listen(8001, () => {
  console.log(`API is listening on port 8001`);
});

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/todo',todoRoutes)
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
app.use("/comment", commentRoutes);

mongoose.connect("mongodb+srv://admin:admin@cluster0.i1jb4fx.mongodb.net/");
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/", router);
