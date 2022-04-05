const mongoose = require("mongoose");
// data base url
const DB_URL = "mongodb://localhost/Products"; //=> an error occured when tried using port :8080also in url
// connecting monodb to node
const connectDatabase=()=>{

    mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
}

module.exports=connectDatabase;
