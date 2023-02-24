const express = require("express");
const { errorHandler } = require("../middlewares/errorMiddleware");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require('path');
const fileUpload = require("express-fileupload");
const blogRoutes = require("../routes/blogRoutes");
const projectRoutes = require("../routes/projectRoutes");
const skillRoutes = require("../routes/skillRoutes");
const contactRoutes = require("../routes/contactRoutes");
const rootRoutes = require("../routes/root");
const connectDB = require("../config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(fileUpload());

//routes
app.use("/", rootRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/skill", skillRoutes);
app.use("/api/contact", contactRoutes);

//serve client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../app/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../../", "app", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production!!!"));
}

app.use(errorHandler);

module.exports = app;
