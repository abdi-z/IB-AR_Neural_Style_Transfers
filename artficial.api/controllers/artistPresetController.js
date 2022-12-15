const ArtistPreset = require("../models/artistPreset");
const mongoose = require("mongoose");

//get all
const getArtistPresets = async (req, res) => {
  const artistPresets = await ArtistPreset.find({}).sort({ createdAt: -1 });
  res.status(200).json(artistPresets);
};

//get single
const getSingleArtistPreset = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });
  const artistPreset = await ArtistPreset.findById(id);
  res.status(200).json(artistPreset);
  if (!artistPreset)
    return res.status(400).json({ error: "No artist preset found" });
};

//post
const createArtistPreset = async (req, res) => {
  const { presetID, artistName, description, imgURL } = req.body;

  try {
    const artistPreset = await ArtistPreset.create({
      presetID,
      artistName,
      description,
      imgURL,
    });
    res.status(200).json(artistPreset);
  } catch (err) {
    res.status(400).json({ error: "Please fill all of the fields!!!" });
  }
};

//delete
const deleteArtistPreset = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const artistPreset = await ArtistPreset.findByIdAndDelete(id);
  res.status(200).json(artistPreset);
  if (!artistPreset) return res.status(400).json({ error: "No artistPreset found" });
};

//update
const updateArtistPreset = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const artistPreset = await ArtistPreset.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(artistPreset);
  if (!artistPreset) return res.status(400).json({ error: "No artistPreset" });
};

module.exports = {
  getArtistPresets,
  getSingleArtistPreset,
  createArtistPreset,
  deleteArtistPreset,
  updateArtistPreset,
};
