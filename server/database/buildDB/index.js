const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('../config/connection')
const createQuery = readFileSync(join(__dirname, '..', 'config', 'init.sql'), "utf8");
connection.query(createQuery)
