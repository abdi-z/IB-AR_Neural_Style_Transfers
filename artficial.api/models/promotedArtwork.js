const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const promotedArtworkSchema = new Schema(
  {
    artworkID: {
      type: String,
      required: true,
    },
    requestedByUserID: {
      type: String,
      required: true,
    },
    planID: {
      type: Number,
    },
    promotionStartDate: {
      type: Date,
    },
    promotionEndDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PromotedArtwork", promotedArtworkSchema);
