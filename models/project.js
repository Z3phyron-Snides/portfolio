const Joi = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    tags: {
      type: Array,

      default: [],
    },
   
    url: {
      type: String,
      required: true,
    },
    onGoing: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
