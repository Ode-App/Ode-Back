const express = require('express');
const v1Routes = require('./v1');
const isAliveRouter = require('./isAlive');

const Routes = express.Router();

Routes.use('/.well-known', isAliveRouter);
Routes.use('/v1', v1Routes);

module.exports = Routes;
