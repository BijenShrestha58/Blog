const userModel= require('./user.schema');
const SECRET_KEY = require('../../config/keys');
const jwt = require('jsonwebtoken');


const authMiddleWare = async (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token === null) return res.sendStatus(401)
  jwt.verify(token, SECRET_KEY, async (err, user) => {
    if (err) return res.sendStatus(403)
    const userTemp = await userModel.findById(user._id);
    if(userTemp){
        req.user = user
        next();
    }else{
        res.sendStatus(401);   
    }
  });
}

module.exports=authMiddleWare;
