const express = require("express");
const { AddProject, GetAllProjects, DelProjects, GetProject, UpdateProject } = require("../controllers/projectCtrl");
const router = express.Router();

router.route("/").post(AddProject).get(GetAllProjects).put(UpdateProject);

router
  .route("/:id")
  
  .get(GetProject)
  .delete(DelProjects);

module.exports = router;
