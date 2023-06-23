const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Database is connected!");
  } catch (error) {
    console.log("database connection could not be established!");
    console.log(error);
  }
};
module.exports = connectdb;
