const express = require('express');
const router = express.Router();
const { createTask, getAllTasks } = require('../controllers/tasks.controller');
const { requireFields } = require('../middleware/requiredFields.middleware');

router.post('/', requireFields(['title', 'content']), createTask);
router.get('/', getAllTasks);

module.exports = router;
