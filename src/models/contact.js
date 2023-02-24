const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Enter email"],
    trim: true,
  },
  subject: {
    type: String,
    required: [true, "Please Enter a subject"],
  },
  message: {
    type: String,
    required: [true, "Please Enter a message"],
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
