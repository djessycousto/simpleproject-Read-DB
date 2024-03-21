const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  smallDesc: {
    type: String,
    minlength: [3, "please provide at least 3 characters"],
    required: [true, "please provide a small description"],
    trim: true,
  },

  title: {
    type: String,
    minlength: [3, "please provide at least 3 characters"],
    required: [true, "please provide a title"],
    trim: true,
  },

  image: {
    type: String,
  },

  description: {
    type: String,
    minlength: [3, "please provide at least 3 characters"],
    required: [true, "please provide a description"],
    trim: true,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
