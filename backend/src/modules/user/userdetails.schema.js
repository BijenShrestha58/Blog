const mongoose = require('mongoose');

const userdetailsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },

    
},{
    timestamps:true
})

module.exports = mongoose.model('Userdetails', userdetailsSchema)