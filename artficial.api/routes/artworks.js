const express = require("express");
const router = express.Router();
const {
  getArtworks,
  getArtworksByCreator,
  getSingleArtwork,
  likeSingleArtwork,
  createArtwork,
  deleteSingleArtwork,
  updateArtwork,
} = require("../controllers/artworkController");

//GET all artworks
router.get("/", getArtworks);

//GET all artworks by Creator
router.get("/creator/:id", getArtworksByCreator);

//GET single artworks
router.get("/:id", getSingleArtwork);

//Like single artwork
router.patch("/:id/like", likeSingleArtwork);

//POST single artworks
router.post("/", createArtwork);

//DELETE single artworks
router.delete("/:id", deleteSingleArtwork);

//UPDATE single artworks
router.patch("/:id", updateArtwork);

module.exports = router;
