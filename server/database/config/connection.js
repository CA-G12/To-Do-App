require('dotenv').config();
const { DATA_URL } = process.env;
const { Pool } = require('pg');
module.exports = new Pool({
    connectionString: DATA_URL,
    ssl: false

});