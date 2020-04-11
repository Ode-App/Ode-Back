require('rootpath')();
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const Logger = require('./src/config/Logger');
const Routes = require('./src/routes');
const swaggerSpec = require('./swaggerOptions');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Swagger Configuration
const options = {
  customCss: '.swagger-ui .topbar { display: none }',
};

// Adding routes
app.use('/', Routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));

const port = process.env.PORT || 80;
const server = app.listen(port, () => {
  Logger.info(`Server listening on port ${port}`);
});

module.exports = server;
