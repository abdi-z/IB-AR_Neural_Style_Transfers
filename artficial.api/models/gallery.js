const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gallerySchema = new Schema(
  {
    galleryName: {
      type: String,
      required: true,
    },
    createdByID: {
      type: String,
      required: true,
    },
    artworkIDs: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", gallerySchema);
