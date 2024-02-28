const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/config");

require("colors");
dotenv.config();

//db config
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

const itemRoute = require("./routes/itemRoute");

app.get("/", (req, res) => {
  res.send("hi");
});

app.use("/api/items/", itemRoute);

//listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`.bgRed.white);
});
