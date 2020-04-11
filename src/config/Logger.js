const winston = require('winston');

// Setting Logger
const { format } = winston;
const log = winston.createLogger({
  format: format.combine(
    format.label({
      label: 'NodeJS',
    }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.json(),
    format.colorize({ all: true }),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = log;
