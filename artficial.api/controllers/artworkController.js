const Artwork = require("../models/artwork");
const User = require("../models/user");
const mongoose = require("mongoose");

//get all
const getArtworks = async (req, res) => {
  const artworks = await Artwork.find({}).sort({ createdAt: -1 });
  res.status(200).json(artworks);
};

//get single
const getSingleArtwork = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });
  const artwork = await Artwork.findById(id);

  const user = await User.findById(artwork.createdByID);
  const userName = user.userName;
  res.header("Access-Control-Expose-Headers", "creator");
  res.set("creator", userName.toString());
  res.status(200).json(artwork);
  if (!artwork) return res.status(400).json({ error: "No artwork found" });
};

//post
const createArtwork = async (req, res) => {
  const {
    title,
    description,
    imgURL,
    createdByID,
    categoryID,
    nftLink,
    presetID,
  } = req.body;

  try {
    const artwork = await Artwork.create({
      title,
      description,
      imgURL,
      createdByID,
      categoryID,
      nftLink,
      presetID,
    });
    res.status(200).json(artwork);
  } catch (err) {
    res.status(400).json({ error: "Please fill all of the fields!!!" });
  }
};

//delete
const deleteSingleArtwork = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const artwork = await Artwork.findByIdAndDelete(id);
  res.status(200).json(artwork);
  if (!artwork) return res.status(400).json({ error: "No artwork found" });
};

//update
const updateArtwork = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const artwork = await Artwork.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(artwork);
  if (!artwork) return res.status(400).json({ error: "No recipe" });
};

module.exports = {
  getArtworks,
  getSingleArtwork,
  createArtwork,
  deleteSingleArtwork,
  updateArtwork,
};
