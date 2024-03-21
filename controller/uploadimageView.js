const path = require("path");
const Blog = require("../model/Blog");

const uploadPict = async (req, res) => {
  // check if there is file

  try {
    const blogImage = req.files.file;

    console.log(blogImage);
    if (!req.files) return res.status(400).send("No files were uploaded.");
    //   // check the size

    const maxSize = 1024 * 5;

    if (req.files.size > maxSize) return res.status(400).send("files too big.");

    // mimetype check

    //  if (!blogImage.mimetype.startWith("image") {
    //     return res.status(400).send("files too big.")
    //  }

    //   // path
    const imagePath = path.join(
      __dirname,
      "../public/imagess" + `${blogImage.name}`
    );
    await blogImage.mv(imagePath);

    res.status(200).render({ image: `/imagess/${blogImage.name}` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadPict };
