const { encryptPassword, comparePassword } = require('../../plugins/bcrypt');
const userModel= require('./user.schema');
const SECRET_KEY = require('../../config/keys');
const jwt = require('jsonwebtoken');
const userRegister = async (req,res) => {
    const {username, password}= req.body;
    const user = await userModel.findOne({
        username
    });

    if(user){
        return res.status(400).send({
            message: 'User already exists'
        })
    }else{
        const encryptedPassword =await encryptPassword(password)
        await userModel.create({
            username,password :encryptedPassword
        })
        return res.status(401).send({
            data: null,
            message: 'User created successfully'
        })
    }
}

const userLogin = async (request, response, next) => {
    const logInData = request.body;
    const user = await userModel.findOne({username: logInData.username});
    if (user) {
        const isPasswordRight = await comparePassword(logInData.password, user.password)

        if (isPasswordRight) {
            const tokenData = createToken(user);
            console.log(tokenData, "**********Token Data**********");
            response.send({
                data: user,
                token: tokenData
            });
        } else {
            response.status(400).send({status: 400, errorMessage: "wrong credentials"});
        }
    } else {
        response.status(400).send({status: 400, errorMessage: "wrong credentials"});
    }
}

const createToken = (user) => {
    const expiresIn = 60 * 60; // an hour
    const secret = SECRET_KEY;
    const dataStoredInToken = {
        _id: user._id,
    };
    // @ts-ignore
    return {
        expiresIn,
        token: jwt.sign(dataStoredInToken, secret, {expiresIn}),
    };
}


module.exports = {
    userLogin,
    userRegister,
}
