require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const artworkRoutes = require("./routes/artworks");
const userRoutes = require("./routes/users");
const artistPresets = require("./routes/artistPresets");
const categories = require("./routes/categories");
const galleries = require("./routes/galleries");
const promotedArtworks = require("./routes/promotedArtworks");
const reportArtworks = require("./routes/reportArtworks");
const themePresets = require("./routes/themePresets");
const index = require("./routes/index");

const app = express();

//middlewares

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/", index);
app.use("/api/v1/artworks", artworkRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/artistPresets", artistPresets);
app.use("/api/v1/categories", categories);
app.use("/api/v1/galleries", galleries);
app.use("/api/v1/promotedArtworks", promotedArtworks);
app.use("/api/v1/reportArtworks", reportArtworks);
app.use("/api/v1/themePresets", themePresets);

//Connecting to mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("live: listening on 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
