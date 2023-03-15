const express = require("express");
const {
  AddExperience,
  GetAllExperiences,
  DelExperiences,
  GetExperience,
  UpdateExperience,
} = require("../controllers/experienceCtrl");
const router = express.Router();

router
  .route("/")
  .post(AddExperience)
  .get(GetAllExperiences)
  .put(UpdateExperience);

router
  .route("/:id")

  .get(GetExperience)
  .delete(DelExperiences);

module.exports = router;
