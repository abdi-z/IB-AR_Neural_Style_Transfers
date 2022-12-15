const express = require("express");
const router = express.Router();
const {
  getArtistPresets,
  getSingleArtistPreset,
  createArtistPreset,
  deleteArtistPreset,
  updateArtistPreset,
} = require("../controllers/artistPresetController");

//GET all recipes
router.get("/", getArtistPresets);

//GET single recipe
router.get("/:id", getSingleArtistPreset);

//POST single recipe
router.post("/", createArtistPreset);

//DELETE single recipe
router.delete("/:id", deleteArtistPreset);

//UPDATE single recipe
router.patch("/:id", updateArtistPreset);

module.exports = router;
