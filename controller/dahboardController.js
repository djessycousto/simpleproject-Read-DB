const Blog = require("../model/Blog");

// const createBlog = async (req, res) => {
//   // console.log(req.body);
//   // res.send();
//   // console.log(req.bo);
//   try {
//     const blog = await Blog.create(req.body);
//     // console.log(blog);
//     res.status(200).render("add");
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

const getAllBlogDash = async (req, res) => {
  //   try {
  //     const blogs = await Blog.find();
  //     res.status(200).render("index", { blogs });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getSingleBlogDash = async (req, res) => {
  //   try {
  //     const { _id: blogId } = req.params;
  //     const blog = await Blog.findOne({ blogId });

  //     if (!blog) {
  //       return res.status(400).json({ message: "the Id does not exist  " });
  //     }

  //     res.status(200).json({ blog });
  //   } catch (error) {
  //     res.status(500).json({ message: "the Id does not exist  ", error });
  //   }
  res.send("dash board");
};

const updateBlog = async (req, res) => {
  res.send("update");
};

// const dash = async (req, res) => {
//   console.log(req, "dash");
// };

// const deleteBlog = async (req, res) => {
//   res.send("delete");
// };

module.exports = {
  getAllBlogDash,
  //   getSingleBlogDash,

  // dash,
};
