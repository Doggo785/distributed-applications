require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database.config');
const authRoutes = require('./routes/auth.route');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ 
    service: 'auth-service',
    status: 'running',
    endpoints: {
      register: 'POST /auth/register',
      login: 'POST /auth/login',
      validate: 'GET /auth/validate'
    }
  });
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à PostgreSQL établie');
    await sequelize.sync();
    console.log('Base de données synchronisée');
    app.listen(PORT, () => {
      console.log(`Auth service en écoute sur le port ${PORT}`);
    });
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    process.exit(1);
  }
};

startServer();
