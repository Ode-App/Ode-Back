const express = require('express');
const userRouter = require('./user');

const v1Routes = express.Router();

v1Routes.use('/user', userRouter);

module.exports = v1Routes;
