const userService = require('../services/user.service');

function authenticate(req, res, next) {
  const { username, password } = req.body;

  userService.authenticate(username, password)
    .then((user) => (user ? res.json(user) : res.status(401).json({ message: 'Username or password is incorrect' })))
    .catch((err) => res.status(401).json(err));
}

function register(req, res) {
  const {
    username, password, firstName, lastName, email,
  } = req.body;

  userService.register(username, password, firstName, lastName, email)
    .then(() => res.json({
      message: 'User created. ',
    }))
    .catch((err) => res.status(500).json({ error: err.message }));
}

module.exports = {
  authenticate,
  register,
};
