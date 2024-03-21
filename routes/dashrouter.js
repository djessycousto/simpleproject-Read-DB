const express = require("express");
const router = express.Router();
// controler

const {
  getAllBlogDash,
  getSingleBlogDash,
  //   createBlog,
  //   getAllBlog,
  //   getSingleBlog,
} = require("../controller/dahboardController");

// non api
router.get("/dashboard", (req, res) => {
  console.log(req.url);
  res.render("dash");
});

// Create

// // GET all blogs, GET, PATCH, DELETE a single blog
router.route("/").get(getAllBlogDash);

// router.route("/:id").get(getSingleBlogDash);

// router.route("/:id").patch(updateBlog);
// router.route("/:id").delete(updateBlog);

module.exports = router;
