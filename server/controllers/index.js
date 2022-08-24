
const signup = require("./postData")
const signin = require("./getData")
const {getTasksController, postTasksController, deleteTaskController, updateTaskController} = require('./tasks')



module.exports = {
  signin, signup, getTasksController, postTasksController, updateTaskController, deleteTaskController
}
