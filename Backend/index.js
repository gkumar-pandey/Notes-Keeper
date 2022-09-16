const express = require("express");
const notes = require("./Data/Data");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./Middleware/errorMiddleware");
dotenv.config();

connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// app.get("/api/notes/:id", (req, res) => {
//   const id = req.params.id;

//   const note = notes.find((note) => id == note._id);
//   res.json(note);
// });
app.use("/api/users", userRoutes);
// app.use('/api/login', )
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
