const postUsers = require("../database/queries/postUsers");

const signup = (req, res) => {

    const { user_name, email, password } = req.body;
    postUsers({ user_name, email, password })
        .then((data) => {
            res.redirect("/todo/index.html");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ msg: "server error" })
        });
}

module.exports = signup;
