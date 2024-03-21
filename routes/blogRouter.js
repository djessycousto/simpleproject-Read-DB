const express = require("express");
const router = express.Router();
// controler

const {
  createBlog,
  getAllBlog,
  getSingleBlog,
} = require("../controller/blogcontroller");
const { uploadPict } = require("../controller/uploadPicController");

// non api

// Create
router.route("/add").post(createBlog); //static in relation with form action / post request
router.route("/upload").post(uploadPict); // need to edit picture name before saving

// // GET all blogs, GET, PATCH, DELETE a single blog
router.route("/").get(getAllBlog);
router.route("/login").get(getAllBlog);
router.route("/signUp").get(getAllBlog);
// router.route("/dash-config").get(getAllBlog);

router.route("/:id").get(getSingleBlog);

// router.route("/:id").patch(updateBlog);
// router.route("/:id").delete(updateBlog);

module.exports = router;
