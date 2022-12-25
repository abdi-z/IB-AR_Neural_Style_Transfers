const express = require("express");
const router = express.Router();
//controller
const { loginUser, signupUser,getAllUsers} = require("../controllers/userController");

//login
router.post("/login", loginUser);
//signup
router.post("/signup", signupUser);
//get all users
router.get("/",getAllUsers)
module.exports = router;
