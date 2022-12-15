const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema(
  {
    presetID: {
      type: String,
    },
    artistName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ArtistPreset", artistSchema);
