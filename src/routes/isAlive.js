const express = require('express');

const isAliveRouter = express.Router();

isAliveRouter.get('/ready', (req, res) => {
  res.status(200).json('Ready');
});

isAliveRouter.get('/live', (req, res) => {
  res.status(200).json('Live');
});

module.exports = isAliveRouter;
