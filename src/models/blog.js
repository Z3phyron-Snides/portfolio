const Joi = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    publish: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
