const User = require("../models/user");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);
    user.token = token;
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup
const signupUser = async (req, res) => {
  const { email, password, userName, phoneNumber, gender, avatarImgURL } =
    req.body;

  try {
    const user = await User.signup(
      email,
      password,
      userName,
      phoneNumber,
      gender,
      avatarImgURL
    );

    // create a token
    const token = createToken(user._id);
    user.token = token;
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//get all users
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

//get all users
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });
  const user = await User.findById(id);
  res.status(200).json(user);
  if (!user) return res.status(400).json({ error: "No user found" });
};

//update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const user = await User.findById(id);
  user.userName = req.body.userName;
  user.email = req.body.email;
  user.phoneNumber = req.body.phoneNumber;
  await user.save();
  res.status(200).json(user);
  if (!user) return res.status(400).json({ error: "No user found" });
};
module.exports = {
  loginUser,
  signupUser,
  getAllUsers,
  getSingleUser,
  updateUser,
};
