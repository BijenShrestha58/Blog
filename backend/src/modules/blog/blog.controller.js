const userSchema = require('../user/user.schema');
const blogSchema= require('./blog.schema');

const getAllBlog=async(req,res)=>{
    return res.send({
        data: await blogSchema.find({}).populate('user','username _id')
    })
}
const getById = async(req,res)=>{
    return res.send({
        data:await blogSchema.find({_id: req.params.id}).populate('user','username _id')
    })
}

const getByUser = async(req,res)=>{
    const username = req.params.username;
    const user = await userSchema.findOne({ username});
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    return res.send({
        data:await blogSchema.find({user:user._id}).populate('user','username _id')
    })
}

const createBlog = async(req, res)=>{
    await blogSchema.create({
        title:req.body.title,
        content:req.body.content,
        user: req.body.user
    });
    res.status(200).send("Blog Created")
}

const deleteBlog = async(req,res)=>{
    const blogId= req.params.id;
    await blogSchema.findByIdAndDelete(blogId);
    res.status(200).send("Blog Deleted")
}

const editBlog = async(req,res)=>{
    const blogId=req.params._id;
    const updatedBlog={
        title:req.body.title,
        content:req.body.content
    }
    await blogSchema.findByIdAndUpdate(blogId,updatedBlog);
    res.status(200).send("Blog Updated")
}




module.exports = {
getAllBlog,
getById,
getByUser,
createBlog,
deleteBlog,
editBlog
}

