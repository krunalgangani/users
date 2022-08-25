const mongoose = require('mongoose');

// connection
const DB = process.env.DATABASE || "mongodb+srv://krunal:WAhJJn93KenzZMnP@cluster0.j2c1tgb.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose
  .connect(DB , { useNewUrlParser:true , useCreateIndex:true , useUnifiedTopology:true , useFindAndModify :false })
  .then(() => console.log("connection is successfully done"))
  .catch((err) => console.log(`Error is ${err}`));
