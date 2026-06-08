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

app.get('/', (req, res) => { res.send('Hello Node API'); });

app.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error('Erreur création produit:', error.message);
    res.status(500).json({ message: 'Erreur lors de la création du produit', error: error.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error('Erreur récupération produits:', error.message);
    res.status(500).json({ message: 'Erreur lors de la récupération des produits', error: error.message });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
    res.status(200).json(product);
  } catch (error) {
    console.error('Erreur récupération produit:', error.message);
    res.status(500).json({ message: 'Erreur lors de la récupération du produit', error: error.message });
  }
});

app.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
    res.status(200).json(product);
  } catch (error) {
    console.error('Erreur mise à jour produit:', error.message);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du produit', error: error.message });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
    res.status(200).json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    console.error('Erreur suppression produit:', error.message);
    res.status(500).json({ message: 'Erreur lors de la suppression du produit', error: error.message });
  }
});
