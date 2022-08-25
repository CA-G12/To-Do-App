const connection = require('../../config/connection');

const postTask = (task, userName) => {
  return connection.query({text: 'INSERT INTO tasks (task, user_id) VALUES ($1, (SELECT id FROM users WHERE user_name = $2))', 
  values: [task, userName]});
}

module.exports = postTask;