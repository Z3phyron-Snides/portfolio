const express = require("express");
const { SendContact } = require("../controllers/contactCtrl");
const router = express.Router();

router.route("/").post(SendContact);



module.exports = router;
