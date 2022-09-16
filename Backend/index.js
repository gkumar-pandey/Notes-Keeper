const express = require("express");
const notes = require("./Data/Data");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;

  const note = notes.find((note) => id == note._id);
  res.json(note);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
