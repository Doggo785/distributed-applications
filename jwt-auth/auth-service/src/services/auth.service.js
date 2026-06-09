const User = require('../models/user.model');
const { hashPassword, comparePassword } = require('../utils/bcrypt.util');
const { generateToken } = require('../utils/jwt.util');

const register = async (email, password, role = 'user') => {
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error('Cet email est déjà utilisé');

    const passwordHash = await hashPassword(password);
    const user = await User.create({ email, passwordHash, role });
    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    return { user: { id: user.id, email: user.email, role: user.role }, token };
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Email ou mot de passe incorrect');

    const isPasswordValid = await comparePassword(password, user.passwordHash);
    if (!isPasswordValid) throw new Error('Email ou mot de passe incorrect');

    const token = generateToken({ id: user.id, email: user.email, role: user.role });
    return { user: { id: user.id, email: user.email, role: user.role }, token };
  } catch (error) {
    throw error;
  }
};

module.exports = { register, login };
