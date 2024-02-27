
const express = require("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const morgan = require ("morgan");
const dotenv = require ("dotenv");
const productRouter = require ("./routes/productRoutes.js");
const userRouter = require ("./routes/userRoutes.js");
const billsRouter = require("./routes/billsRoutes.js");
const connectDB=require('./config/config.js')
require('colors');

dotenv.config();
connectDB()
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use("/api/products/", productRouter);
app.use("/api/users/", userRouter);
app.use("/api/bills/", billsRouter);

//Create Port
const PORT = process.env.PORT || 5000;

//Listen
app.listen(PORT, () => {
  console.log(`Serve at running on the port: http://localhost:${PORT}`);
});
