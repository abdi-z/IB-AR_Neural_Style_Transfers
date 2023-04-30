const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const promotedArtworkSchema = new Schema(
  {
    artworkID: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrendingArtwork", trendingArtworkSchema);
