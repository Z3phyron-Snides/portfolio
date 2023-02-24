const express = require("express");
const { AddBlog, GetAllBlogs, DelBlog, GetBlog } = require("../controllers/blogCtrl");
const handleImage = require("../middlewares/imageHandler");
const router = express.Router();

router.route("/").post(handleImage,AddBlog).get(GetAllBlogs);

router
  .route("/:id")
  .get(GetBlog)
  //   .put( UpdateProduct)
  //   .get(GetProduct)
  .delete(DelBlog);

module.exports = router;
