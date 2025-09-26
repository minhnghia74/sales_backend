const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ordersRouter = require("./routes/orders");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// simple API
app.get("/", (req, res) => {
  res.send("Backend running!");
});

app.use("/orders", ordersRouter);

app.listen(4000, () => {
  console.log("Backend running at http://localhost:4000");
});