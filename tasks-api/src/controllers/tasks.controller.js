const Task = require('../models/tasks.model');

const createTask = async (request, response) => {
  try {
    const { title, content } = request.body;
    if (!title || !content) {
      return response.status(400).json({ message: 'Le titre et le contenu sont requis' });
    }
    const task = new Task({ title, content });
    await task.save();
    response.status(201).json(task);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const getAllTasks = async (request, response) => {
  try {
    const tasks = await Task.find();
    response.json(tasks);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = { createTask, getAllTasks };
