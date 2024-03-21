const mongoose = require("mongoose");

const dbConnect = async (uri) => {
  try {
    await mongoose.connect(uri);

    console.log("db connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = dbConnect;
