var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({
    message: "Welcome to Artficial API",
    routes: [
      "artistPresets",
      "artworks",
      "categories",
      "galleries",
      "promotedArtworks",
      "reportArtworks",
      "themePresets",
      "users",
    ],
  });
});

module.exports = router;
