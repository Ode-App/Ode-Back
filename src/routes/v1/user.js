const express = require('express');
const userController = require('../../controllers/user.controller');

const router = express.Router();

// Routes
/**
 * @swagger
 *
 * /v1/user/authenticate:
 *  post:
 *      description: Authenticate user.
 *      tags:
 *          - User
 *      requestBody:
 *          required: true
 *          content:
 *              'application/json':
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *                  example:
 *                      username: Luard
 *                      password: luard123
 *      responses:
 *          '200':
 *            description: OK.
 */
router.post('/authenticate', userController.authenticate);

/**
 * @swagger
 *
 * /v1/user/register:
 *  post:
 *      description: Register user.
 *      tags:
 *          - User
 *      requestBody:
 *       required: true
 *       content:
 *         'application/json':
 *            schema:
 *              $ref: '#/components/schemas/User'
 *            example:
 *              username: Luard
 *              password: luard123
 *              firstName: Luard
 *              lastName: Castellanos
 *              email: luard.developer@gmail.com
 *      responses:
 *          '200':
 *            description: OK.
 */
router.post('/register', userController.register);

module.exports = router;
