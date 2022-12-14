const { join } = require("path");
const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const router = require("./routes/index");

const app = express();

app.set('port', process.env.PORT || 5050);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());

app.use(express.static(join(__dirname, "..", "public")));
app.use(router)

module.exports = app;




