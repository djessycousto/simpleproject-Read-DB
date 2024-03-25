// Import necessary modules
require("dotenv").config();
const express = require("express");

const dbConnect = require("./db/connect");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Import route modules
const authRouter = require("./routes/authRoute");
const blogRouterView = require("./routes/blogRouterView");
const dashRouter = require("./routes/dashrouter");

// Create an Express app
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(fileUpload()); // Enable file uploads

app.set("view engine", "ejs");
app.use(express.static("./public"));

// Routes
app.use("/auth", authRouter); // Mount authRouter for both view and API related routes
app.use("/", blogRouterView); // Mount blogRouterView for view-related routes
app.use("/api/v1", authRouter); // Mount API related routes
app.use("/dashboard", dashRouter); // Mount dashRouter for dashboard-related routes

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
