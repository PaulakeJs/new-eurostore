const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const Port = 8080;
const userRoute = require("./routes/userRouters");
const item = require("./routes/itemRoute");
const adminRoute = require("./routes/Admin");
const productRoute = require("./routes/productRoutes");
const cartRoute = require("./routes/cartRoute");

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if MongoDB connection is successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use("/api/auth", userRoute);
app.use("/api/item", item);
app.use("/api/admin", adminRoute);
app.use("/api/productRoute", productRoute);
app.use("/api/cart", cartRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(Port);
