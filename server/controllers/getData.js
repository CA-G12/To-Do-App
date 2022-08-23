const express = require("express");
const getUsers = require("../database/queries/getUsers");

const router = express.Router();

router.get("/users", (req, res) => {
    getUsers().then(data => {
        return res.json(data.rows);
    }).catch(err => console.log(err));
});
module.exports = router;