const express = require("express");

const dotenv = require("dotenv");

const server = express();
dotenv.config();

server.use("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5010;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
