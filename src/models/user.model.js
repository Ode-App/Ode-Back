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
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *            description: Password needed to login.
 *          firstName:
 *            type: string
 *          lastName:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user.
 *        example:
 *           username: Luard
 *           password: luard123
 *           firstName: luard123
 *           lastName: luard123
 *           email: luard123
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
