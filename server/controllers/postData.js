const express = require("express");
const postUsers = require("../database/queries/postUsers");

const router = express.Router();

router.post("/create-user", (req, res) => {

    const { user_name, email, password } = req.body;
    postUsers({ user_name, email, password })
        .then((data) => {
            console.log(data.rows);
            res.redirect("/todo/index.html");
        })
        .catch((err) => res.status(500).json({ msg: "server error" }));
});

module.exports = router;