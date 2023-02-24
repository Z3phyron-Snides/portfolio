const express = require("express");
const {
  AddSkill,
  GetAllSkills,
  DelSkill,
} = require("../controllers/skillCtrl");
const handleImage = require("../middlewares/imageHandler");
const router = express.Router();

// router.route("/").post(AddProject);

router.route("/").post(handleImage,AddSkill).get(GetAllSkills);
//   .get(GetProduct)

router.route("/:id").delete(DelSkill);

module.exports = router;
