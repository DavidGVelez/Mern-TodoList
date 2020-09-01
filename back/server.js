const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connexion established!");
});

const todoRoutes = require("./routes/todo.routes");

app.use("/", todoRoutes);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});

// module.exports = app;
