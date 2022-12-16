const express = require("express");
const router = express.Router();
const {
  getReportArtworks,
  getSingleReportArtwork,
  createReportArtwork,
  deleteSingleReportArtwork,
  updateReportArtwork,
} = require("../controllers/reportArtworkController");

//GET all recipes
router.get("/", getReportArtworks);

//GET single recipe
router.get("/:id", getSingleReportArtwork);

//POST single recipe
router.post("/", createReportArtwork);

//DELETE single recipe
router.delete("/:id", deleteSingleReportArtwork);

//UPDATE single recipe
router.patch("/:id", updateReportArtwork);

module.exports = router;
