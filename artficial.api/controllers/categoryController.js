const Category = require("../models/category");
const mongoose = require("mongoose");

//get all
const getCategories = async (req, res) => {
  const categories = await Category.find({}).sort({ createdAt: -1 });
  res.status(200).json(categories);
};

//get single
const getSingleCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });
  const category = await Category.findById(id);
  res.status(200).json(category);
  if (!category) return res.status(400).json({ error: "No category found" });
};

//post
const createCategory = async (req, res) => {
  const {
    categoryTitle,
    categoryID,
    categoryDescription,
  } = req.body;

  try {
    const category = await Category.create({
      categoryTitle,
      categoryID,
      categoryDescription,
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ error: "Please fill all of the fields!!!" });
  }
};

//delete
const deleteSingleCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const category = await Category.findByIdAndDelete(id);
  res.status(200).json(category);
  if (!category) return res.status(400).json({ error: "No artwork found" });
};

//update
const updateCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const category = await Category.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(category);
  if (!category) return res.status(400).json({ error: "No category" });
};

module.exports = {
  getCategories,
  getSingleCategory,
  createCategory,
  deleteSingleCategory,
  updateCategory,
};
