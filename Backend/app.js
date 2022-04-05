const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { urlencoded } = require("body-parser");

const errorMiddelware = require("../Backend/middelware/error");

const PRODUCTROUTES = require("./routes/ProductRouter");
const USERROUTES = require("./routes/userRouter");
const ORDERROUTES = require("./routes/orderRouter");
const STDROUTES = require("./routes/stdRouter");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", PRODUCTROUTES);
app.use("/api", USERROUTES);
app.use("/api", ORDERROUTES);
app.use("/api", STDROUTES);
// newly added
app.use(errorMiddelware);

app.get("", (req, res) => {
  res.send("Server is successfully running");
});

module.exports = app;
