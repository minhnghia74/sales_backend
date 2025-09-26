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
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});