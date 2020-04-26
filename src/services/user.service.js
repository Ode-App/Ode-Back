const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const log = require('../config/Logger');

const { User } = db;

async function authenticate(username, password) {
  const user = await User.findOne({ username }).select({ username: 1, _id: 1, hash: 1 });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.SECRET);
    return {
      ...userWithoutHash,
      token,
    };
  }
  throw new Error('Username or password is incorrect');
}

async function register(username, password, firstName, lastName, email) {
  // Validate required fields.
  if (username === 'undefined'
        || username === null
        || password === 'undefined'
        || password === null
  ) {
    throw new Error('Username and Password cannot be null');
  }

  // Validate existing user
  if (await User.findOne({ username })) {
    throw new Error(`Username "${username}" is already taken`);
  }

  try {
    const user = new User({
      username,
      firstName,
      lastName,
      email,
    });
    // Hash password
    if (password) {
      user.hash = bcrypt.hashSync(password, 10);
    }
    // Save user
    await user.save();
  } catch (e) {
    log.error(e);
    throw new Error('Error creating the user.');
  }
}

module.exports = {
  authenticate,
  register,
};
