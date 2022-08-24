const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('../config/connection')

function build(){
    const createQuery = readFileSync(join(__dirname, '..', 'config', 'init.sql'), "utf8");
    returnconnection.query(createQuery)
}