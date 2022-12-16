const ReportArtwork = require("../models/reportArtwork");
const mongoose = require("mongoose");

//get all
const getReportArtworks = async (req, res) => {
  const reportArtwork = await ReportArtwork.find({}).sort({
    createdAt: -1,
  });
  res.status(200).json(reportArtwork);
};

//get single
const getSingleReportArtwork = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });
  const reportArtwork = await ReportArtwork.findById(id);
  res.status(200).json(reportArtwork);
  if (!reportArtwork)
    return res.status(400).json({ error: "No reportArtwork found" });
};

//post
const createReportArtwork = async (req, res) => {
  const {
    artworkID,
    reportedByUserID,
    reportedDate,
    reportStatement,
    reportCategory,
  } = req.body;

  try {
    const reportArtwork = await ReportArtwork.create({
      artworkID,
      reportedByUserID,
      reportedDate,
      reportStatement,
      reportCategory,
    });
    res.status(200).json(reportArtwork);
  } catch (err) {
    res.status(400).json({ error: "Please fill all of the fields!!!" });
  }
};

//delete
const deleteSingleReportArtwork = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const reportArtwork = await ReportArtwork.findByIdAndDelete(id);
  res.status(200).json(reportArtwork);
  if (!reportArtwork)
    return res.status(400).json({ error: "No reportArtwork found" });
};

//update
const updateReportArtwork = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    res.status(404).json({ error: "Invalid id" });

  const reportArtwork = await ReportArtwork.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  res.status(200).json(reportArtwork);
  if (!reportArtwork)
    return res.status(400).json({ error: "No reportArtwork" });
};

module.exports = {
  getReportArtworks,
  getSingleReportArtwork,
  createReportArtwork,
  deleteSingleReportArtwork,
  updateReportArtwork,
};
