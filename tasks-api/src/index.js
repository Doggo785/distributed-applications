require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tasksRoutes = require('./routes/tasks.routes');
const app = express();
const port = 3000;

const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;

mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.use('/api/tasks', tasksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
