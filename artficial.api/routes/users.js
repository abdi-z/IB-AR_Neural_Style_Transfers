const express = require("express");
const router = express.Router();
//controller
const {
  loginUser,
  signupUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} = require("../controllers/userController");

//login
router.post("/login", loginUser);
//signup
router.post("/signup", signupUser);
//get all users
router.get("/", getAllUsers);
//get single users
router.get("/:id", getSingleUser);
//get single users
router.patch("/:id", updateUser);

module.exports = router;
