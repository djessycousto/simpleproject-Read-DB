// Import necessary modules
require("dotenv").config();
const express = require("express");

const dbConnect = require("./db/connect");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
const coockieParser = require("cookie-parser");

//###################### to be replaced     #############################
const authRouter = require("./routes/authRoute");
// const blogRouter = require("./routes/blogRouter");
const blogRouterView = require("./routes/blogRouterView");
const dashRouter = require("./routes/dashrouter");
//###################################################

// const nodemailer = require("nodemailer");

// Create an Express app
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(coockieParser(process.env.JWT_SECRET));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(fileUpload()); // Enable file uploads

app.set("view engine", "ejs");
app.use(express.static("./public"));

// Routes

// app.get("/dashboard", (req, res) => {
//   console.log(req.url);
//   res.render("dash");
// });

// ///////// old route to be replace ////////////////////////////////////////

//view
// careful with the endpoint position
// app.use("/auth", authRouter); // View-related routes
app.use("/api/v1/auth", authRouter); // API-related routes
app.use("/", blogRouterView); // View-related routes

//API
// app.use("/api/v1/auth", authRouter); // API-related routes
// app.use("/api/v1/blogs", blogRouter); // API routes
// app.use("/dashboard", dashRouter); // API-related routes

// ///////// old route to be replace ////////////////////////////////////////

// Database connection and server start
const port = process.env.PORT || 8080;

const start = async () => {
  try {
    // Connect to the MongoDB database
    await dbConnect(process.env.MONGO_URI);

    // Start the server
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

// Call the start function to initiate the server
start();
