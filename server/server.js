const express = require("express");
const session = require("cookie-session");
const helmet = require("helmet");
const hpp = require("hpp");
const csurf = require("csurf");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require('mongoose')
const logger = require('morgan')

var cors = require('cors')
require('dotenv').config()



dotenv.config({ path: path.resolve(__dirname, ".env") });

const passport = require("./middlewares/passport");

const app = express();
app.use(cors())

app.use(logger('dev'))
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
const News = require("./db/models/News-model");
const Band = require('./db/models/Band-model');
const Gig = require("./db/models/Gig-model");

app.use("/auth", authRoutes);

app.get('/news', async (req, res) => {
  try{
    const allnews = await News.find()
    res.json(allnews)   //фетч в ас в редухе
    return
  }catch(err){
    console.log('---->>',err);
    res.json({}); 
  }
})

app.get('/bands/:id', async (req, res) => {
  try{
    console.log(req.params.id);
    const gruppa = req.params.id.replace('_', ' ')
    console.log(gruppa);
    const theband = await Band.findOne({bandName: gruppa})
    console.log(theband, 'from app server');
    res.json(theband)   //фетч в ас в редухе
    return
  }catch(err){
    console.log('---->>',err);
    res.json({}); 
  }
})

app.get('/gigs/:id', async (req, res) => {
  try{
    console.log(req.params);
    const konts = req.params.id.replace(/_/g, ' ')
    console.log(konts);
    const thegig = await Gig.findOne({name: konts})
    console.log(thegig, 'from app server');
    res.json(thegig)   //фетч в ас в редухе
    return
  }catch(err){
    console.log('---->>',err);
    res.json({}); 
  }
})
app.get('/gigs', async (req, res) => {
  try{
    const gigs = await Gig.find()
    console.log(gigs, 'from app server');
    res.json(gigs)   //фетч в ас в редухе
    return
  }catch(err){
    console.log('---->>',err);
    res.json({loh:'loh'}); 
  }
})


app.listen(8080, () => {
  console.log("I'm listening!");
  console.log(process.env.DB_ATLAS_URL);
  mongoose.connect(process.env.DB_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

});

module.exports = app;
