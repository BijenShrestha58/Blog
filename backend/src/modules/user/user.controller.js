const { encryptPassword, comparePassword } = require("../../plugins/bcrypt");
const userModel = require("./user.schema");
const userdetailsModel = require("./userdetails.schema");
const SECRET_KEY = require("../../config/keys");
const jwt = require("jsonwebtoken");
const userSchema = require("./user.schema");
const userdetailsSchema = require("./userdetails.schema");

const userRegister = async (req, res) => {
  const { firstname, lastname, gender, dob, email, username, password } =
    req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (user) {
    if (user.username === username) {
      return res.status(400).send({
        message: "Username taken",
      });
    } else {
      return res.status(400).send({
        message: "Email already in use",
      });
    }
  } else {
    const encryptedPassword = await encryptPassword(password);
    const newUser = new userModel({
      username,
      email,
      password: encryptedPassword,
    });
    await newUser.save();

    const userDetails = new userdetailsModel({
      user: newUser._id,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      dob: dob,
    });

    await userDetails.save();
    return res.status(201).send({
      data: null,
      message: "User created successfully",
    });
  }
};

const userLogin = async (request, response, next) => {
  const logInData = request.body;
  const user = await userModel.findOne({ username: logInData.username });
  if (user) {
    const isPasswordRight = await comparePassword(
      logInData.password,
      user.password
    );

    if (isPasswordRight) {
      const tokenData = createToken(user);
      console.log(tokenData, "**********Token Data**********");
      response.send({
        data: user,
        token: tokenData,
      });
    } else {
      response
        .status(400)
        .send({ status: 400, errorMessage: "wrong credentials" });
    }
  } else {
    response
      .status(400)
      .send({ status: 400, errorMessage: "wrong credentials" });
  }
};

const createToken = (user) => {
  const expiresIn = 60 * 60; // an hour
  const secret = SECRET_KEY;
  const dataStoredInToken = {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  };
  // @ts-ignore
  return {
    expiresIn,
    token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
  };
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, "-password");
    const userDetails = await userdetailsModel.find({});
    return res.status(200).json({ users, userDetails });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching users and details" });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await userSchema.findByIdAndDelete(userId);
  res.status(200).send("User deleted");
  await userdetailsSchema.findByIdAndDelete(userId);
  res.status(200).send("User deleted");
};

const getMyDetails = async (req, res) => {
  console.log(req.user);
  const userId = req.user._id;
  const user = await userSchema.findById(userId).lean();

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  const userDetails = await userdetailsSchema.findOne({ user: req.user._id });
  return res.send({
    data: {
      ...user,
      userDetails: userDetails,
    },
  });
};

module.exports = {
  userLogin,
  userRegister,
  getAllUsers,
  deleteUser,
  getMyDetails,
};
