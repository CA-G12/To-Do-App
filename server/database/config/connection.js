require('dotenv').config();
// const { DATA_URL } = process.env;
const DATA_URL = "";
const { Pool } = require('pg');
if (process.env.NODE_ENV === "production") {
    DATA_URL = process.env.DATABASE_URL;
}
else if (process.env.NODE_ENV === "development") {
    DATA_URL = process.env.DATA_URL;
}
module.exports = new Pool({
    connectionString: DATA_URL,
    ssl: process.env === "localhost" ? false : {
        rejectUnauthorized: false,
    }

});