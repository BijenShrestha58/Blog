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
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Blog', blogSchema)