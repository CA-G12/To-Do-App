
const connection = require('../../config/connection');

const updateTask = (task, id) => {
  return connection.query({text: 'UPDATE tasks SET task = $1 WHERE tasks.id = $2', values: [task, id]});
}

module.exports = updateTask;