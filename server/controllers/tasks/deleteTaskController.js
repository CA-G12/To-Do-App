const {
  deleteTask,
} = require("../../database/queries/tasks/index");


const deleteTaskController = (req, res) => {
  const { taskId } = req.params;

  deleteTask(taskId).then((data) => console.log(data));
};

module.exports = deleteTaskController;