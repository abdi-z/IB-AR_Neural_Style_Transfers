const express = require("express");
const router = express.Router();
const {
  getGalleries,
  getSingleGallery,
  createGallery,
  deleteSingleGallery,
  updateGallery,
} = require("../controllers/galleryController");

//GET all recipes
router.get("/", getGalleries);

//GET single recipe
router.get("/:id", getSingleGallery);

//POST single recipe
router.post("/", createGallery);

//DELETE single recipe
router.delete("/:id", deleteSingleGallery);

//UPDATE single recipe
router.patch("/:id", updateGallery);

module.exports = router;
