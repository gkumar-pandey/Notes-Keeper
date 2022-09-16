const mongoose = require("mongoose");
require("dotenv").config();
const user = process.env.DB_USER;
const pass = process.env.DB_PASSWORD;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${user}:${pass}@note-keeper.g5hxrhc.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log(`MongoDb connected : ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

module.exports = connectDB;
