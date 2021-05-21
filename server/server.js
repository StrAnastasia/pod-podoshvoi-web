const express = require("express");
const session = require("cookie-session");
const helmet = require("helmet");
const hpp = require("hpp");
const csurf = require("csurf");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");
const PORT = process.env.PORT
const path = require("path");
const mongoose = require("mongoose");
const logger = require("morgan");
const toleranceUser = require('../server/middlewares/checkUserforNews')


var cors = require("cors");
require("dotenv").config();

dotenv.config({ path: path.resolve(__dirname, ".env") });

const passport = require("./middlewares/passport");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(helmet());
app.use(hpp());

app.use(
  session({
    name: "session",
    secret: "secretKeyWooo",
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  })
);

app.use(csurf());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use(passport.initialize());

const authRoutes = require("./routes/auth");
const User = require('../server/db/models/User-model')
const News = require("./db/models/News-model");
const Band = require("./db/models/Band-model");
const Gig = require("./db/models/Gig-model");
const Place = require("./db/models/Place-models");
const { default: axios } = require("axios");

app.use("/auth", authRoutes);

app.get("/news", async (req, res) => {
  try {
    const allnews = await News.find();
    res.json(allnews); //фетч в ас в редухе
    return;
  } catch (err) {
    console.log("---->>", err);
    res.json({});
  }
});

app.get("/bands/:id", toleranceUser, async (req, res) => {
  try {
    const gruppa = req.params.id.replace("_", " ");
    const theband = await Band.findOne({ bandName: gruppa });
    res.json(theband); //фетч в ас в редухе
    return;
  } catch (err) {
    console.log("---->>", err);
    res.json({});
  }
});

app.get("/gigs/:id", async (req, res) => {
  try {
    const konts = req.params.id.replace(/_/g, " ");
    const thegig = await Gig.findOne({ name: konts });
    res.json(thegig); //фетч в ас в редухе
    return;
  } catch (err) {
    console.log("---->>", err);
    res.json({});
  }
});
app.get("/gigs", async (req, res) => {
  try {
    const gigs = await Gig.find();

    res.json(gigs); //фетч в ас в редухе
    return;
  } catch (err) {
    console.log("---->>", err);
    res.json({ loh: "loh" });
  }
});
app.get("/favgroup/:id/:name", async (req, res) => {
  const currUser = User.find({ name: req.params.id });
  if (currUser.usersBands.length) {
    currUser.usersBands.push(req.params.name);
  } else {
    currUser.usersBands = [req.params.name];
  }
  currUser.save();
});
app.get("/place/:id", async (req, res) => {
  try {
    const barchik = req.params.id.replace(/_/g, " ");
    const theplace = await Place.findOne({ name: barchik });
    const newAdress = encodeURI(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${theplace.name}&inputtype=textquery&fields=geometry&key=AIzaSyCtPbYjq1VPSnTlsfvfNs3pexwlEAYjDmk`
    );
    const data = await axios.get(newAdress);
    const newplace = {
      ...theplace._doc,
      location: data.data.candidates[0].geometry.location,
    };
    // console.log(newplace);
    res.json(newplace); //фетч в ас в редухе
    return;
  } catch (err) {
    console.log("---->>", err);
    res.json({});
  }
});

app.listen(8080, () => {
  console.log("I'm listening!");
  console.log(process.env.DB_ATLAS_URL);
  mongoose.connect(process.env.DB_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
});

module.exports = app;
