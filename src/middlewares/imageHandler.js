const createHttpError = require("http-errors");
const { v4: uuidv4 } = require("uuid");
const path = require("path");


const handleImage = async (req, res, next) => {
  // console.log(req.files)
  const file = req.files.thumb; // Change to use req.files.thumb instead of req.files.images
  let reqFile = "";
  let promises = [];

  const host = "/uploads/";

  // Check if file exists
  if (!file) {
    // Change the check to use `!file` instead of `req.files === null`
    return next(createHttpError.UnsupportedMediaType());
  } else {
    // Rename file with generated id
    file.name = uuidv4();
    let fileName = file.name + "." + file.mimetype.split("/")[1];
    const savePath = path.join(`${__dirname}/../uploads/${fileName}`);
    let url = host + fileName;
    reqFile = url;
    promises.push(file.mv(savePath));
  }
  req.thumb = reqFile; // Change req.images to req.thumb
  next();
};

module.exports = handleImage;
