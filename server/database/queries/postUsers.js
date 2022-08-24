const connection = require('./../config/connection');

const postUsers = ({ user_name, email, password }) => {
  const sql = {
    text: `insert into users(user_name, email , password) values($1, $2 , $3)`,
    values: [user_name, email, password],
  };

  //   return connection.query(sql);
  return connection.query(
    `insert into users(user_name, email , password) values($1, $2 , $3) `,
    [user_name, email, password]
  );
};

module.exports = postUsers;
