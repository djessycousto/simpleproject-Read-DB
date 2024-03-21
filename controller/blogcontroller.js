const Blog = require("../model/Blog");

const createBlog = async (req, res) => {
  // console.log(req.bo);
  try {
    const blog = await Blog.create(req.body);
    // console.log(blog);
    res.status(201).json({ blog });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ blogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

// non update to view

const getSingleBlog = async (req, res) => {
  try {
    const { _id: blogId } = req.params;
    const blog = await Blog.findOne({ blogId });

    if (!blog) {
      return res.status(400).json({ message: "the Id does not exist  " });
    }

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: "the Id does not exist  ", error });
  }
};

const updateBlog = async (req, res) => {
  res.send("update");
};

const deleteBlog = async (req, res) => {
  res.send("delete");
};

module.exports = {
  createBlog,
  getAllBlog,
  getSingleBlog,
};
