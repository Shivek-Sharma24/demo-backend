const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
let PORT = process.env.PORT;
let name = "Shivek Sharma";
app.listen(PORT, (req, res) => {
  console.log(`server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("server running succesfully");
});

app.get("/getdata", (req, res) => {
  res.send(name);
});
