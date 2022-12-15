const express = require("express");
const router = express.Router();
const {
    getCategories,
    getSingleCategory,
    createCategory,
    deleteSingleCategory,
    updateCategory,
} = require("../controllers/categoryController");

//GET all recipes
router.get("/", getCategories);

//GET single recipe
router.get("/:id", getSingleCategory);

//POST single recipe
router.post("/", createCategory);

//DELETE single recipe
router.delete("/:id", deleteSingleCategory);

//UPDATE single recipe
router.patch("/:id", updateCategory);

module.exports = router;

