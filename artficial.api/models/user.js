const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// static signup method
userSchema.statics.signup = async function (
  email,
  password,
  userName,
  phoneNumber,
  gender,
  avatarImgURL
) {
  // validator
  if (
    !email ||
    !password ||
    !userName ||
    !phoneNumber ||
    !gender ||
    !avatarImgURL
  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const userNameExists = await this.findOne({ userName });
  if (userNameExists) {
    throw Error("Username already in use");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    userName,
    phoneNumber,
    gender,
    avatarImgURL,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
