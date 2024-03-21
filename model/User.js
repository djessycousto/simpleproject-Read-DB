const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// only one user

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "please provide at least 3 characters"],
    required: [true, "please provide a small description"],
    trim: true,
  },

  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid Email",
    },

    required: [true, "please provide a title"],
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    minlength: [3, "please provide at least 3 characters"],
    required: [true, "please provide a description"],
    trim: true,
  },
});

// before we save we hash pass

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare pass
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  // console.log("from User", candidatePassword, this.password);

  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
