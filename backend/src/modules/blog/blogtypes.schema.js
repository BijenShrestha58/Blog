const mongoose = require('mongoose');

const blogtypesSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique:true
    },
})

module.exports = mongoose.model('Blogtypes', blogtypesSchema)