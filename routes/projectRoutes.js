const express = require("express");
const { AddProject, GetAllProjects, DelProjects, GetProject } = require("../controllers/projectCtrl");
const router = express.Router();

router.route("/").post(AddProject).get(GetAllProjects);

router
  .route("/:id")
//   .post(verifyAdminToken, UpdateProduct)
  .get(GetProject)
  .delete(DelProjects);

module.exports = router;
