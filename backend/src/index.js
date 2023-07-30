const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
// const axios = require('axios')
const cors = require('cors');
// const userRoutes = require('./modules/user/user.routes');
// const todoRoutes = require('./modules/todo/todo.routes');
// const todoController = require('./modules/todo/todo.controller')
app.listen(8000, () => {
    console.log(`API is listening on port 8000`);
});

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use('/todo',todoRoutes)
// app.use('/user',userRoutes)


// mongoose.connect("mongodb+srv://abindrashakya:abs12345678@firstproject.9lljnan.mongodb.net");
mongoose.connect("mongodb+srv://abindra:shakya123@abindracluster.0cyegia.mongodb.net/?retryWrites=true&w=majority");
const database = mongoose.connection; 
database.on('error', (error) => {
    console.log(error)
});


database.once('connected', () => {
    console.log('Database Connected');
});

app.use("/", router);
