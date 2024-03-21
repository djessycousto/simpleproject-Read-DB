const express = require("express");
const router = express.Router();
// controler

const {
  createBlog,
  getAllBlog,
  // dash,
  sendEmail,
} = require("../controller/blogControllerView");
const { uploadPict } = require("../controller/uploadimageView");

// non API

router.get("/add", (req, res) => {
  // console.log(req.url);
  res.render("add");
});

router.get("/about", (req, res) => {
  // console.log(req.url);
  res.render("about");
});
router.get("/gallery", (req, res) => {
  // console.log(req.url);
  res.render("gallery");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/signup", (req, res) => {
  // console.log(req.url);
  res.render("signup");
});
router.get("/login", (req, res) => {
  // console.log(req.url);
  res.render("login");
});

router.route("/").post(createBlog);
router.route("/upload").post(uploadPict); // need to edit picture name before saving
router.route("/contact").post(sendEmail);

// // GET all blogs, GET, PATCH, DELETE a single blog
router.route("/").get(getAllBlog);
router.route("/login").get(getAllBlog);
router.route("/signUp").get(getAllBlog);
// router.route("/dashboard").get(dash);
// router.route("/dash-config").get(getAllBlog);

// router.route("/:id").get(getSingleBlog);

// router.route("/:id").patch(updateBlog);
// router.route("/:id").delete(updateBlog);

module.exports = router;
