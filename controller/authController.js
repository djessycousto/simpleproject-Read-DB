// const User = require("../model/User");
const User = require("../model/User");
// const { createJWT } = require("../utils"); // when you attach cookie to the response we dont need this
const { attachCookiesToResponse } = require("../utils"); // we use this

const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const emailAlreadyExist = await User.findOne({ email });

    if (emailAlreadyExist) {
      return res.status(401).json({ msg: "this email already registered" });
    }
    const user = await User.create({ email, name, password });
    // res.status(200).json({ user });
    // create user token this is the user objet that i will send back

    const tokenUser = { name: user.name, email: user.email, id: user._id };
    // const token = createJWT({ payload: tokenUser }); //

    // remove the token in the response and attach its to cookies
    attachCookiesToResponse({ res, user: tokenUser });

    // res.status(200).json({ user: tokenUser, token });
    res.status(200).json({ user: tokenUser });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  // o
  try {
    // o
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json({ message: "please provide a user and password" });
    } //ok
    const user = await User.findOne({ email });

    // check if the user exist

    if (!user) {
      res.status(401).json({ message: "please provide a valid credential" });
    } //ok

    //check the password
    const isPasswordCorrect = await user.comparePassword(password);
    // console.log("is pass", isPasswordCorrect, password);
    if (!isPasswordCorrect) {
      res.status(401).json({ message: "please provide a valid credential" });
    } //ok
    // then  we attache cookies

    const tokenUser = { name: user.name, email: user.email, id: user._id };
    // const token = createJWT({ payload: tokenUser }); //

    // remove the token in the response and attach its to cookies
    attachCookiesToResponse({ res, user: tokenUser });

    // res.status(200).json({ user: tokenUser, token });
    res.status(200).json({ user: tokenUser });
  } catch (error) {
    //c

    console.log(error);
  }
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ message: "logout Success" });
};

module.exports = {
  register,
  login,
  logout,
};
