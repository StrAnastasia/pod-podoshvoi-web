const express = require("express");
const session = require("cookie-session");
const helmet = require("helmet");
const hpp = require("hpp");
const csurf = require("csurf");
const rateLimit = require("express-rate-limit");
const dotenv = require("dotenv");
const path = require("path");

var cors = require('cors')

const {database} = require('../back/psevdodb')

dotenv.config({ path: path.resolve(__dirname, ".env") });

const passport = require("./middlewares/passport");

const app = express();
app.use(cors())

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

app.use("/auth", authRoutes);

app.get('/news', async (req, res) => {
  console.log(database.news)
  try{
    let allnews = database.news
    res.json(allnews)   //фетч в ас в редухе
    return
  }catch(err){
    console.log('---->>',err);
    res.json({}); 
  }
})

app.listen(8080, () => {
  console.log("I'm listening!");
});

module.exports = app;
