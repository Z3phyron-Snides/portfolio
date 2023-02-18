const express = require("express");
const {
  AddSkill,
  GetAllSkills,
  DelSkill,
} = require("../controllers/skillCtrl");
const router = express.Router();

// router.route("/").post(AddProject);

router.route("/").post(AddSkill).get(GetAllSkills);
//   .get(GetProduct)

router.route("/:id").delete(DelSkill);

module.exports = router;
