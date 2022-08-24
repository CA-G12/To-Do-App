
const connection = require('../../config/connection');

const getTasks = () => {
  return connection.query('SELECT * FROM tasks');
}

module.exports = getTasks;