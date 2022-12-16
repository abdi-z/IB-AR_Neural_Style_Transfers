const express = require("express");
const router = express.Router();
const {
  getPromotedArtworks,
  getSinglePromotedArtwork,
  createPromotedArtwork,
  deleteSinglePromotedArtwork,
  updatePromotedArtwork,
} = require("../controllers/promotedArtworkController");

//GET all recipes
router.get("/", getPromotedArtworks);

//GET single recipe
router.get("/:id", getSinglePromotedArtwork);

//POST single recipe
router.post("/", createPromotedArtwork);

//DELETE single recipe
router.delete("/:id", deleteSinglePromotedArtwork);

//UPDATE single recipe
router.patch("/:id", updatePromotedArtwork);

module.exports = router;
