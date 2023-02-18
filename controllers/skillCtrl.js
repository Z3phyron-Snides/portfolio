const createHttpError = require("http-errors");
const asyncHandler = require("express-async-handler");
const Skill = require("../models/skill");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");
const fileupload = require("express-fileupload");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
/*
    @route addProject api/
    @desc create new project
    @access private
*/
const AddSkill = asyncHandler(async (req, res) => {
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
    let skill = new Skill({
      ...req.body,
      thumbnail: url,
    });
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const GetAllSkills = asyncHandler(async (req, res) => {
  console.log(req.query);
  try {
    const resultPerPage = 8;
    const skillCount = await Skill.countDocuments();

    const apiFeature = new ApiFeatures(Skill.find(), req.query)
      .search()
      .filter();

    let skills = await apiFeature.query;

    apiFeature.pagination(resultPerPage);

    skills = await apiFeature.query.clone();

    res.status(200).json({
      success: true,
      skills,
      skillCount,
      resultPerPage,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const Updateskill = asyncHandler(async (req, res) => {
  const { thumb } = req.files;

  const skillId = req.query.skillId;

  let skill;
  // console.log(req.files);

  let reqFiles = [];
  let promises = [];

  try {
    //check if files exist
    if (req.files) {
      //rename files with generated id
      const { thumb } = req.files;

      const skillId = req.query.skillId;

      let skill;
      // console.log(req.files);

      let reqFiles = [];
      let promises = [];

      //rename files with generated id
      thumb.name = uuidv4();
      let fileName = thumb.name + "." + thumb.mimetype.split("/")[1];
      const savePath = path.join(`${__dirname}/../uploads/${fileName}`);
      reqFiles.push(fileName);
      promises.push(thumb.mv(savePath));

      skill = await Skill.findByIdAndUpdate(
        skillId,
        {
          $set: { ...req.body, images: reqFiles },
        },
        {
          new: true,

          useFindAndModify: false,
        }
      );
    } else {
      skill = await Skill.findByIdAndUpdate(
        skillId,
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

    res.status(201).json(skill);

    let url = `http://localhost:3500/uploads/${reqFiles[0]}`;

    res.status(201).json(skill);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const DelSkill = asyncHandler(async (req, res) => {
  const skillId = req.params.id;
  // console.log(req.params)

  try {
    await Skill.findByIdAndDelete(skillId);

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
  AddSkill,
  GetAllSkills,
  Updateskill,
  DelSkill,
};
