// require("dotenv").config();
// const express = require("express");
// const mongoose= require("mongoose");

// const Band = require('./db/models/Band-model')
// const Genre = require('./db/models/Genre-model')

// const app = express();
// const PORT = 3000
// const DB_ATLAS_URL = process.env.DB_ATLAS_URL;
// const DB_LOCAL_URL = process.env.DB_LOCAL_URL
// //console.log(DB_ATLAS_URL);

// app.get('/bands', async (req, res) => {
//   console.log(Band)
//   try{
//     let allbands = await Genre.find({})
//     res.json(allbands);
//     return
//   }catch(err){
//     console.log('---->>',err);
//     res.json({}); //фетч в ас в редухе
//   }
// })



// app.listen(PORT, async() => {
//   console.log(`Спаси и сохрани`);
//   mongoose.connect(
//     DB_LOCAL_URL,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     },
//     () => {
//       console.log("Дальше бога нет", PORT);
//       console.log(DB_LOCAL_URL)
//     }
//   );
// });

