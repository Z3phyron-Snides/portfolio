const Joi = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", ExperienceSchema);
module.exports = Experience;
