const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reportArtworkSchema = new Schema(
  {
    artworkID: {
      type: String,
      required: true,
    },
    reportedByUserID: {
      type: String,
      required: true,
    },
    reportedDate: {
      type: String,
    },
    reportStatement: {
      type: String,
      required: true,
    },
    reportCategory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ReportArtwork", reportArtworkSchema);
