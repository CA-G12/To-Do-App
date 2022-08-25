const connection = require('./../config/connection');

function getUsers({ username, password }) {
    return connection.query(`SELECT * FROM users where user_name='${username}' and password='${password}'`);
}
module.exports = getUsers;
