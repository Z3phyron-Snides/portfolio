const createHttpError = require("http-errors");
const asyncHandler = require("express-async-handler");
const Blog = require("../models/blog");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
const fileUpload = require("express-fileupload");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

/*
    @route addblog api/
    @desc create new blog
    @access private
*/
const AddBlog = asyncHandler(async (req, res) => {
  const { thumb } = req.files;
  // console.log(req.files);

  let reqFiles = [];
  let promises = [];

  //check iff files exist
  if (req.files === null) {
    res.status(400);
    throw new Error("no fies uploaded");
  } else {
    thumb.name = uuidv4();
    let fileName = thumb.name + "." + thumb.mimetype.split("/")[1];
    const savePath = path.join(`${__dirname}/../uploads/${fileName}`);
    reqFiles.push(fileName);
    promises.push(thumb.mv(savePath));
  }

  let url = `http://localhost:3500/uploads/${reqFiles[0]}`;

  try {
    let blog = new Blog({
      ...req.body,
      thumbnail: url,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const GetAllBlogs = asyncHandler(async (req, res) => {
  console.log(req.query);
  try {
    const resultPerPage = 8;
    const blogsCount = await Blog.countDocuments();

    const apiFeature = new ApiFeatures(Blog.find(), req.query)
      .search()
      .filter();

    let blogs = await apiFeature.query;

    apiFeature.pagination(resultPerPage);

    blogs = await apiFeature.query.clone();

    res.status(200).json({
      success: true,
      blogs,
      blogsCount,
      resultPerPage,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const GetBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({
        success: false,
        msg: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});


const UpdateBlog = asyncHandler(async (req, res) => {
  const { thumb } = req.files;

  const blogId = req.params.id;

  let blog;
  // console.log(req.files);

  let reqFiles = [];
  let promises = [];

  //check if files exist
  if (req.files) {
    //rename files with generated id
    const { thumb } = req.files;

    const blogId = req.query.blogId;

    let blog;
    // console.log(req.files);

    let reqFiles = [];
    let promises = [];

    //rename files with generated id
    thumb.name = uuidv4();
    let fileName = thumb.name + "." + thumb.mimetype.split("/")[1];
    const savePath = path.join(`${__dirname}/../uploads/${fileName}`);
    reqFiles.push(fileName);
    promises.push(thumb.mv(savePath));

    blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $set: { ...req.body, images: reqFiles },
      },
      {
        new: true,

        useFindAndModify: false,
      }
    );
  } else {
    blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $set: { ...req.body },
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
  }

  res.status(201).json(blog);

  let url = `http://localhost:3500/uploads/${reqFiles[0]}`;

  try {
    let blog = new Blog({
      ...req.body,
      thumbnail: url,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
const DelBlog = asyncHandler(async (req, res) => {
  const blogId = req.params.id;



  try {
     await Blog.findByIdAndDelete(blogId);

    res.status(201).json({
      success: "true",
      msg: " successfull",
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = {
  AddBlog,
  GetAllBlogs,
  GetBlog,
  UpdateBlog,
  DelBlog
};
