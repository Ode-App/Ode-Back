// Swagger
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'OdeApp', // Title (required)
      description: 'REST API backend for OdeApp',
      contact: {
        name: 'Luard',
      },
      version: '1.0.0', // Version (required)
    },
    basePath: '/api-docs',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  // Path to the API docs
  apis: [
    './src/models/*.model.js',
    './src/routes/**/*.js',
  ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
// Initialize swagger-jsdoc -> returns validated swagger spec in json format
module.exports = swaggerSpec;
