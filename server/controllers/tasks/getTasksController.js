const { getTasks } = require("../../database/queries/tasks/index");

const getTasksController = (req, res) => {
  const {username} = req.params;
  getTasks(username)
    .then((data) => res.json(data.rows))
    .catch((err) => res.status(500).json({ message: "internal server error" }));
};

module.exports = getTasksController
