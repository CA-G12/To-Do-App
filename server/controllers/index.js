const express = require("express");

const signup = require("./postData")
const signin = require("./getData")


const router = express.Router();

router.post("/create-user", signup);
router.post("/users", signin);

module.exports = router;
