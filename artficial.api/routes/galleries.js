const express = require("express");
const router = express.Router();
const {
  getGalleries,
  getSingleGallery,
  addArtworktoGallery,
  createGallery,
  deleteSingleGallery,
  updateGallery,
  getCreatorsGalleries,
} = require("../controllers/galleryController");

//GET all recipes
router.get("/", getGalleries);

//Add
router.post("/:galleryId/addartwork", addArtworktoGallery);

//GET single recipe
router.get("/:id", getSingleGallery);

//GET single recipe by creator
router.get("/creator/:id", getCreatorsGalleries);

//POST single recipe
router.post("/", createGallery);

//DELETE single recipe
router.delete("/:id", deleteSingleGallery);

//UPDATE single recipe
router.patch("/:id", updateGallery);

module.exports = router;
