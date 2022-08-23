require('dotenv').config();
const { DATA_URL } = process.env;
const { Pool } = require('pg');
module.exports = new Pool({
    connectionString: DATA_URL,
    ssl: false

});

// const express = require("express");
// const getUsers = require("../database/queries/getUsers");

// const router = express.Router();

// router.get("/users", (req, res) => {
//     console.log(getUsers().then(data => {
//         return res.json(data.rows);
//     }).catch(err => console.log(err)));
// });
// module.exports = router;
