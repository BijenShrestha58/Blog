const mongoose= require('mongoose');

const commentSchema= new mongoose.Schema({
    parentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'        
    },
    content:{
        required:true,
        type:String
    },
    user:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    blog:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blog'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Comment',commentSchema)