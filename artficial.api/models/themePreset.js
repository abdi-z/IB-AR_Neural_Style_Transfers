const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const themeSchema = new Schema(
  {
    presetID: {
      type: String,
    },
    themeName: {
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

module.exports = mongoose.model("ThemePreset", themeSchema);
