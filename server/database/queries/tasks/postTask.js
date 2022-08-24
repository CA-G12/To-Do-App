const connection = require('../../config/connection');

const postTask = (task) => {
  return connection.query({text: 'INSERT INTO tasks (task) VALUES ($1)', 
  values: [task]});
}

module.exports = postTask;