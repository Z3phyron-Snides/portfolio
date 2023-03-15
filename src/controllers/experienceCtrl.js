const createHttpError = require("http-errors");
const asyncHandler = require("express-async-handler");
const Experience = require("../models/experience");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
const fileUpload = require("express-fileupload");
/*
    @route addexperience api/
    @desc create new experience
    @access private
*/
const AddExperience = asyncHandler(async (req, res) => {
  try {
    let experience = new Experience({
      ...req.body,
    });
    await experience.save();
    res.status(201).json({experience});
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});
const UpdateExperience = asyncHandler(async (req, res) => {
  const experienceId = req.query.id;

  let experience;
  try {
    experience = await Experience.findByIdAndUpdate(
      experienceId,
      {
        $set: { ...req.body },
      },
      {
        new: true,

        useFindAndModify: false,
      }
    );
    res.status(201).json({experience});
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const GetAllExperiences = asyncHandler(async (req, res) => {
  try {
    const resultPerPage = 8;
    const experiencesCount = await Experience.countDocuments();

    const apiFeature = new ApiFeatures(Experience.find(), req.query)
      .search()
      .filter();

    let experiences = await apiFeature.query;

    apiFeature.pagination(resultPerPage);

    experiences = await apiFeature.query.clone();

    res.status(200).json({
      success: true,
      experiences,
      experiencesCount,
      resultPerPage,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const GetExperience = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let experience;
  // console.log(req.files);

  try {
    experience = await Experience.findById(id);

    res.status(201).json({
      success: "true",
      experience
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const DelExperiences = asyncHandler(async (req, res) => {
  const {id} = req.params;

  let experiences;
  // console.log(req.files);

  try {
    experiences = await Experience.findByIdAndDelete(id);

    res.status(201).json({
      success: "true",
      msg: " successfyl",
      id
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = {
  AddExperience,
  GetAllExperiences,
  UpdateExperience,
  GetExperience,
  DelExperiences
};
