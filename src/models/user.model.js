const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - username
 *          - password
 *        properties:
 *          username:
 *            type: string
 *            example: Luard
 *          password:
 *            type: string
 *            format: password
 *            example: luard123
 *          firstName:
 *            type: string
 *            example: Luard
 *          lastName:
 *            type: string
 *            example: Castellanos
 *          email:
 *            type: string
 *            format: email
 *            example: luard.developer@gmail.com
 */

const schema = new Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: false },
  // email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid']},
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema, 'users');
