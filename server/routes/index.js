const router = require('express').Router();

const {
  signin, signup, getTasksController, postTasksController, updateTaskController, deleteTaskController
} = require('../controllers')

router.post("/create-user", signup);
router.post("/users", signin);

router.get("/tasks", getTasksController);

router.post('/tasks/:value', postTasksController)

router.delete('/tasks/:taskId', deleteTaskController)

router.put('/tasks/:value/:id', updateTaskController)

module.exports = router