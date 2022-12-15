const PromotedArtwork = require("../models/promotedArtwork");
const mongoose = require("mongoose");

//get all
const getPromotedArtworks = async (req, res) => {
  const promotedArtworks = await PromotedArtwork.find({}).sort({
    createdAt: -1,
  });
  res.status(200).json(promotedArtworks);
};

//get single
const getSinglePromotedArtwork = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });
  const promotedArtwork = await PromotedArtwork.findById(id);
  res.status(200).json(promotedArtwork);
  if (!promotedArtwork)
    return res.status(400).json({ error: "No promotedArtwork found" });
};

//post
const createPromotedArtwork = async (req, res) => {
  const {
    artworkID,
    requestedByUserID,
    planID,
    promotionStartDate,
    promotionEndDate,
  } = req.body;

  try {
    const promotedArtwork = await PromotedArtwork.create({
      artworkID,
      requestedByUserID,
      planID,
      promotionStartDate,
      promotionEndDate,
    });
    res.status(200).json(promotedArtwork);
  } catch (err) {
    res.status(400).json({ error: "Please fill all of the fields!!!" });
  }
};

//delete
const deleteSinglePromotedArtwork = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const promotedArtwork = await PromotedArtwork.findByIdAndDelete(id);
  res.status(200).json(promotedArtwork);
  if (!promotedArtwork)
    return res.status(400).json({ error: "No promotedArtwork found" });
};

//update
const updatePromotedArtwork = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const promotedArtwork = await PromotedArtwork.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(promotedArtwork);
  if (!promotedArtwork)
    return res.status(400).json({ error: "No promotedArtwork" });
};

module.exports = {
  getPromotedArtworks,
  getSinglePromotedArtwork,
  createPromotedArtwork,
  deleteSinglePromotedArtwork,
  updatePromotedArtwork,
};
