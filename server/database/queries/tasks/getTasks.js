
const connection = require('../../config/connection');

const getTasks = (username) => {
  return connection.query({
    text: 'select tasks.task, tasks.id from users INNER JOIN tasks ON users.user_name = $1 AND users.id = tasks.user_id',
    values: [username]
  })
}

module.exports = getTasks;