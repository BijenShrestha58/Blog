const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    profile_picture: {
        required: true,
        type: String
    },

    
},{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)