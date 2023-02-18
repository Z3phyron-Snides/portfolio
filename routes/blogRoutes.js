const express = require("express");
const { AddBlog, GetAllBlogs, DelBlog, GetBlog } = require("../controllers/BlogCtrl");
const router = express.Router();

router.route("/").post(AddBlog).get(GetAllBlogs);

router
  .route("/:id")
  .get(GetBlog)
  //   .put( UpdateProduct)
  //   .get(GetProduct)
  .delete(DelBlog);

module.exports = router;
