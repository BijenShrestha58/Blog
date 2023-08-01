const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    user:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status:{
        required:true,
        type: Number,
        default: 1
    },
    blogtypes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blogtypes'
    }]
},{
    timestamps:true
})

module.exports = mongoose.model('Blog', blogSchema)