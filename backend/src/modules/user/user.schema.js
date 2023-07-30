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

    
},{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)