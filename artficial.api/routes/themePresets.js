const express = require("express");
const router = express.Router();
const {
  getThemePresets,
  getSingleThemePreset,
  createThemePreset,
  deleteThemePreset,
  updateThemePreset,
} = require("../controllers/themePresetController");

//GET all recipes
router.get("/", getThemePresets);

//GET single recipe
router.get("/:id", getSingleThemePreset);

//POST single recipe
router.post("/", createThemePreset);

//DELETE single recipe
router.delete("/:id", deleteThemePreset);

//UPDATE single recipe
router.patch("/:id", updateThemePreset);

module.exports = router;
