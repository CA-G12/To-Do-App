
const connection = require('../../config/connection');

const deleteTask = (id) => {
  return connection.query({text: 'DELETE FROM tasks WHERE tasks.id = $1', values: [id]});
}

module.exports = deleteTask;