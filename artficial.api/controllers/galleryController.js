const Gallery = require("../models/gallery");
const mongoose = require("mongoose");

//get all
const getGalleries = async (req, res) => {
  const galleries = await Gallery.find({}).sort({ createdAt: -1 });
  res.status(200).json(galleries);
};

//get single
const getSingleGallery = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });
  const gallery = await Gallery.findById(id);
  res.status(200).json(gallery);
  if (!gallery) return res.status(400).json({ error: "No gallery found" });
};

//get single
const getCreatorsGalleries = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });
  const gallery = await Gallery.find({ createdByID: id });
  res.status(200).json(gallery);
  if (!gallery) return res.status(400).json({ error: "No gallery found" });
};

//add Artwork to Gallery
const addArtworktoGallery = async (req, res) => {
  try {
    const { galleryId } = req.params;
    const { artworkId } = req.body;

    // Find the gallery by id
    const gallery = await Gallery.findById(galleryId);
    if (!gallery) {
      return res.status(404).json({ error: "Gallery not found" });
    }

    // Add artwork id to gallery's artworkIDs array
    gallery.artworkIDs.push(artworkId);

    // Update the gallery in the database
    const updatedGallery = await gallery.save();

    res.json(updatedGallery);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//post
const createGallery = async (req, res) => {
  const { galleryName, createdByID, artworkIDs } = req.body;

  try {
    const gallery = await Gallery.create({
      galleryName,
      createdByID,
      artworkIDs,
    });
    res.status(200).json(gallery);
  } catch (err) {
    res.status(400).json({ error: "Please fill all of the fields!!!" });
  }
};

//delete
const deleteSingleGallery = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const gallery = await Gallery.findByIdAndDelete(id);
  res.status(200).json(gallery);
  if (!gallery) return res.status(400).json({ error: "No gallery found" });
};

//update
const updateGallery = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const gallery = await Gallery.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(gallery);
  if (!gallery) return res.status(400).json({ error: "No gallery" });
};

module.exports = {
  getGalleries,
  getSingleGallery,
  addArtworktoGallery,
  createGallery,
  deleteSingleGallery,
  updateGallery,
  getCreatorsGalleries,
};
