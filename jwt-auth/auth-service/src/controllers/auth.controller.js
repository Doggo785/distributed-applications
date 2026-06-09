const { register, login } = require('../services/auth.service');

const registerController = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email et mot de passe sont requis' });
    const result = await register(email, password, role);
    res.status(201).json({ message: 'Inscription réussie', ...result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email et mot de passe sont requis' });
    const result = await login(email, password);
    res.status(200).json({ message: 'Connexion réussie', ...result });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const validateController = (req, res) => {
  res.status(200).json({ message: 'Token valide', user: req.user });
};

module.exports = { registerController, loginController, validateController };
