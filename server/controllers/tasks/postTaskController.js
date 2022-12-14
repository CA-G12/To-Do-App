const {
  postTask,
} = require("../../database/queries/tasks/index");

const postTaskController = (req, res) => {
  const { value } = req.params;
  const userName = req.body.username;
  postTask(value, userName)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => "err" + res.json(err));
};

module.exports = postTaskController;