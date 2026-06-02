const express = require('express');
const router = express.Router();
const { createTask, getAllTasks } = require('../controllers/tasks.controller');

router.post('/', createTask);
router.get('/', getAllTasks);

module.exports = router;
