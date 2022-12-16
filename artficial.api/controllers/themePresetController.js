const ThemePreset = require("../models/themePreset");
const mongoose = require("mongoose");

//get all
const getThemePresets = async (req, res) => {
  const themePresets = await ThemePreset.find({}).sort({ createdAt: -1 });
  res.status(200).json(themePresets);
};

//get single
const getSingleThemePreset = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });
  const themePresets = await ThemePreset.findById(id);
  res.status(200).json(themePresets);
  if (!themePresets)
    return res.status(400).json({ error: "No Theme preset found" });
};

//post
const createThemePreset = async (req, res) => {
  const { presetID, themeName, description, imgURL } = req.body;

  try {
    const themePresets = await ThemePreset.create({
      presetID,
      themeName,
      description,
      imgURL,
    });
    res.status(200).json(themePresets);
  } catch (err) {
    res.status(400).json({ error: "Please fill all of the fields!!!" });
  }
};

//delete
const deleteThemePreset = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const themePresets = await ThemePreset.findByIdAndDelete(id);
  res.status(200).json(themePresets);
  if (!themePresets)
    return res.status(400).json({ error: "No ThemePreset found" });
};

//update
const updateThemePreset = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const themePresets = await ThemePreset.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(themePresets);
  if (!themePresets) return res.status(400).json({ error: "No ThemePreset" });
};

module.exports = {
  getThemePresets,
  getSingleThemePreset,
  createThemePreset,
  deleteThemePreset,
  updateThemePreset,
};
