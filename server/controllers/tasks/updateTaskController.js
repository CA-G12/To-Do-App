const {
  updateTask,
} = require("../../database/queries/tasks/index");

const updateTaskController = (req, res) => {
  const { value, id } = req.params;
  updateTask(value, id)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => "err" + res.json(err));
};

module.exports = updateTaskController;