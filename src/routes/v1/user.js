const express = require('express');
const userController = require('../../controllers/user.controller');

const router = express.Router();

// Routes
/**
 * @swagger
 * /v1/user/authenticate:
 *  post:
 *      summary: Authenticate user.
 *      tags:
 *          - User
 *      consumes:
 *          - application/json
 *      requestBody:
 *       content:
 *         'application/json':
 *           schema:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *             example:
 *               username: Luard
 *               password: luard123
 *      responses:
 *          '200':
 *            description: OK.
 * /v1/user/register:
 *  post:
 *      summary: Register user.
 *      tags:
 *          - User
 *      consumes:
 *          - application/json
 *      requestBody:
 *       content:
 *         'application/json':
 *            schema:
 *              type: object
 *              required:
 *                  - username
 *                  - password
 *              properties:
 *                  username:
 *                      type: string
 *                  password:
 *                      type: string
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  email:
 *                      type: string
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

router.post('/authenticate', userController.authenticate);
router.post('/register', userController.register);

module.exports = router;
