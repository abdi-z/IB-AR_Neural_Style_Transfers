const Artwork = require("../models/artwork");
const User = require("../models/user");
const mongoose = require("mongoose");

//get all
const getArtworks = async (req, res) => {
  const artworks = await Artwork.find({}).sort({ createdAt: -1 });
  res.status(200).json(artworks);
};

//get most liked artwork
const getMostLikedArtwork = async (req, res) => {
  try {
    // Get all the artworks
    const artworks = await Artwork.find({});

    // Calculate the count of liked artworks
    let maxLikes = 0;
    let maxLikedArtwork = null;

    artworks.forEach((artwork) => {
      console.log(Object.keys(artwork.likes).length);
      if (likesCount > maxLikes) {
        maxLikes = likesCount;
      }
    }); //////////////////////////////////////
    console.log(maxLikes);
    res.status(200).json({ maxLikes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

//get all by creator
const getArtworksByCreator = async (req, res) => {
  const createdByID = req.params.id;
  const artworks = await Artwork.find({ createdByID }).sort({ createdAt: -1 });

  const user = await User.findById(artworks[0].createdByID);
  const userName = user.userName;
  res.header("Access-Control-Expose-Headers", "creator");
  res.set("creator", userName.toString());
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

// like Single Artwork
const likeSingleArtwork = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body.userId);
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }
    const { userId } = req.body;
    const isLiked = artwork.likes.get(userId) || false;

    console.log(userId);
    console.log(isLiked);

    if (isLiked) {
      artwork.likes.delete(userId);
    } else {
      artwork.likes.set(userId, true);
    }
    await artwork.save();

    res.json({ message: "Post liked/unliked" });
  } catch (error) {
    console.log("can't like/unlike");
    res.status(500).json({ message: "Server error" });
  }
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

  const artwork = await Artwork.findByIdAndUpdate({ _id: id }, { ...req.body });
  res.status(200).json(artwork);
  if (!artwork) return res.status(400).json({ error: "No recipe" });
};

module.exports = {
  getArtworks,
  getMostLikedArtwork,
  getArtworksByCreator,
  getSingleArtwork,
  likeSingleArtwork,
  createArtwork,
  deleteSingleArtwork,
  updateArtwork,
};
