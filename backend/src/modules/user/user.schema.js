const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({   
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    email: {
        required :true,
        type: String
    },
    status: {
        required :true,
        type: String,
        default: 'active'
    },
    role: {
        required :true,
        type: String,
        default: 'user'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)