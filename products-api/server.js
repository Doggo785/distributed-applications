const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://admin:admin123@backedworkshop.n62p7p2.mongodb.net/')
  .then(() => {
    console.log('Connecté à MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Serveur en écoute sur le port ${PORT}`);
    });
  })
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Hello Node API');
});
