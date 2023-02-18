const createHttpError = require("http-errors");
const asyncHandler = require("express-async-handler");

const { SendMail } = require("../utils/sendMail");
const { emailSchema } = require("../helpers/validation_schema");
const Contact = require("../models/contact");

/*
    @route addProject api/
    @desc create new project
    @access private
*/
const SendContact = asyncHandler(async (req, res) => {
  try {
    const result = await emailSchema.validateAsync(req.body);

    const message = new Contact(result);

    await message.save();

    // Send the email
    await SendMail(message.email, message.subject, message.message);

    res.status(201).json({
      success: true,
      data: message
    })
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = {
  SendContact,
};
