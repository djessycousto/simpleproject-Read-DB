const Blog = require("../model/Blog");
const nodemailer = require("nodemailer");

const createBlog = async (req, res) => {
  // console.log(req.body);
  // res.send();
  // console.log(req.bo);
  try {
    const blog = await Blog.create(req.body);
    // console.log(blog);
    res.status(200).render("add");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).render("index", { blogs });
  } catch (error) {
    console.log(error);
  }
};

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

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;
  let testAccount = await nodemailer.createTestAccount();

  // const transport = nodemailer.createTransport({
  //   service: "gmail",

  //   auth: {
  //     user: "gosho6116@gmail.com",
  //     pass: "]gP!!8mV6,3@Ld.",
  //   },
  // });

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "lila35@ethereal.email",
      pass: "8zDwsc9TznpJnJ1DrZ",
    },
  });

  let info = await transporter.sendMail({
    from: ` ${name}, ${email}`,
    to: "	lila35@ethereal.email",
    subject: `${message}`,
    // html: "",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });
  console.log(info);
  res.json(info);
};

// const updateBlog = async (req, res) => {
//   res.send("update");
// };

// const dash = async (req, res) => {
//   console.log(req, "dash");
// };

// const deleteBlog = async (req, res) => {
//   res.send("delete");
// };

module.exports = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  sendEmail,
  // dash,
};
