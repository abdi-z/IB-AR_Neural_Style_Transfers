const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    categoryID: {
      type: Number,
      required: true,
    },
    categoryTitle: {
      type: String,
      required: true,
    },
    categoryDescription: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
