const createHttpError = require("http-errors");
const asyncHandler = require("express-async-handler");
const Project = require("../models/project");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
const fileUpload = require("express-fileupload");
/*
    @route addProject api/
    @desc create new project
    @access private
*/
const AddProject = asyncHandler(async (req, res) => {
  try {
    let project = new Project({
      ...req.body,
    });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
const UpdateProject = asyncHandler(async (req, res) => {
  const projectId = req.query.projectId;

  let project;
  try {
    project = await Project.findByIdAndUpdate(
      projectId,
      {
        $set: { ...req.body },
      },
      {
        new: true,

        useFindAndModify: false,
      }
    );
    res.status(201).json(project);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const GetAllProjects = asyncHandler(async (req, res) => {
  console.log(req.query);
  try {
    const resultPerPage = 8;
    const projectsCount = await Project.countDocuments();

    const apiFeature = new ApiFeatures(Project.find(), req.query)
      .search()
      .filter();

    let projects = await apiFeature.query;

    apiFeature.pagination(resultPerPage);

    projects = await apiFeature.query.clone();

    res.status(200).json({
      success: true,
      projects,
      projectsCount,
      resultPerPage,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const GetProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let project;
  // console.log(req.files);

  try {
    project = await Project.findById(id);

    res.status(201).json({
      success: "true",
      project
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const DelProjects = asyncHandler(async (req, res) => {
  const {id} = req.params;

  let projects;
  // console.log(req.files);

  try {
    projects = await Project.findByIdAndDelete(id);

    res.status(201).json({
      success: "true",
      msg: " successfyl",
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = {
  AddProject,
  GetAllProjects,
  UpdateProject,
  GetProject,
  DelProjects
};
