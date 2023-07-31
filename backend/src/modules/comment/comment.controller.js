const commentSchema= require('./comment.schema');

const getAllComment=async(req,res)=>{
    return res.send({
        data: await commentSchema.find({})
        .populate('user','username _id')
        .populate('blog','title _id')
        .populate({
            path: 'parentId',
            select:'content user',
            populate: {
              path: 'user',
              select: 'username'
            }
          })
    })
}
const getById = async(req,res)=>{
    return res.send({
        data:await commentSchema.find({_id: req.params.id})
        .populate('user','username _id')
        .populate('blog','title _id')
        .populate('parentId','_id user')
    })
}

// const getByUser = async(req,res)=>{
//     return res.send({
//         data:await commentSchema.find({user._id: req.params.})
//     })
// }

const createComment = async(req, res)=>{
    await commentSchema.create({
        parentId:req.body.parentId,
        content:req.body.content,
        user: req.body.user,
        blog:req.body.blog
    });
    res.status(200).send("Comment Created")
}

const deleteComment = async(req,res)=>{
    const commentId= req.params._id;
    await commentSchema.findByIdAndDelete(commentId);
    res.status(200).send("Comment Deleted")
}

const editComment = async(req,res)=>{
    const commentId=req.params._id;
    const updatedComment={
        content:req.body.content
    }
    await commentSchema.findByIdAndUpdate(commentId,updatedComment);
    res.status(200).send("Comment Updated")
}

module.exports = {
getAllComment,
getById,
createComment,
deleteComment,
editComment
}

