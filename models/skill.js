const Joi = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", SkillSchema);
module.exports = Skill;
