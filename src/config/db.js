const mongoose = require('mongoose');
const User = require('../models/user.model');
const log = require('./Logger');

const opts = {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGODB_URI } = process.env;
mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI, opts);
log.info(`Connected to database: ${process.env.MONGODB_URI}`);

const { connection } = mongoose;

connection.on('error', (e) => {
  if (e.message.code === 'ETIMEDOUT') {
    log.error(e);
    mongoose.connect(MONGODB_URI, opts);
  }
  log.error(e);
});
connection.on('connected', () => {
  log.info(`MongoDB successfully connected to ${MONGODB_URI}`);
});
connection.on('reconnected', () => {
  log.info('MongoDB reconnected!');
});

process.on('SIGINT', async () => {
  await connection.close();
  log.info('Force to close the MongoDB conection');
  process.exit(0);
});


module.exports = {
  User,
  connection,
};
