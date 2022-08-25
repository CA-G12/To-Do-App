const getUsers = require("../database/queries/getUsers");

const signin = (req, res) => {
    const { username, password } = req.body;
    getUsers({ username, password })
        .then((data) => {
            const user = data.rows[0]

            if (!user) {
                return res.status(404).json({ error: "user not found" })
            }
            res.redirect("/todo/index.html");
            // res.json(user);
        })
        .catch((err) => {
            // console.log(err);
            res.status(500).json({ msg: "server error" })
        });
}

module.exports = signin
