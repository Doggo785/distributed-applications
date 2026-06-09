require('dotenv').config();
const sequelize = require('../config/database.config');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const seedUsers = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données établie');
    await sequelize.sync({ force: true });
    console.log('Base de données synchronisée');

    const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;

    const adminPasswordHash = await bcrypt.hash('admin123', saltRounds);
    await User.create({ email: 'admin@example.com', passwordHash: adminPasswordHash, role: 'admin' });
    console.log('Utilisateur admin créé');

    const userPasswordHash = await bcrypt.hash('user123', saltRounds);
    await User.create({ email: 'user@example.com', passwordHash: userPasswordHash, role: 'user' });
    console.log('Utilisateur normal créé');

    console.log('Seed terminé avec succès');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors du seed:', error);
    process.exit(1);
  }
};

seedUsers();
