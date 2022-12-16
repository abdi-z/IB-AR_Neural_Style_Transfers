const express = require("express");
const router = express.Router();
const {
  getArtworks,
  getSingleArtwork,
  createArtwork,
  deleteSingleArtwork,
  updateArtwork,
} = require("../controllers/artworkController");

//GET all recipes
router.get("/", getArtworks);

//GET single recipe
router.get("/:id", getSingleArtwork);

//POST single recipe
router.post("/", createArtwork);

//DELETE single recipe
router.delete("/:id", deleteSingleArtwork);

//UPDATE single recipe
router.patch("/:id", updateArtwork);

module.exports = router;
