# OdeApp backend

Backend for OdeApp based on NodeJS using MongoDB.

## Environment variables
Environment variables are set on the .env file. It doesn't get pushed on Git, so in order to run locally you need to create and configure the file.

Environment variables can be obtained by using 

```javascript
process.env.XXXXX
```
Where `XXXXX` is the environment variable name.

## Swagger

Swagger can be found on `/api-docs/`

Swagger is added by using `swagger-ui-express` and `swagger-jsdoc`.

A swaggerOptions file is required and the basic project info is set there.

The swagger specs are set on the code by using comments with the @swagger tag.

Example:
```javascript
/**
 * @swagger
 * /user/authenticate:
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
```

## MongoDB

Url: https://cloud.mongodb.com
User: `OdeAdmin`