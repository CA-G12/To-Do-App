const connection = require('./../config/connection');

function getUsers({ username, password }) {
    console.log(username + ', Password: ' + password);
    return connection.query(`SELECT * FROM users where user_name='${username}' and password='${password}'`);
}
module.exports = getUsers;
