const express = require('express');
const oas3Tools = require('oas3-tools');
const swaggerUi = require('swagger-ui-express');
const jsYaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const app = express();

// Define the options for the OpenAPI middleware
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

// Load the OpenAPI document
const openApiDocumentPath = path.join(__dirname, './api/openapi.yaml');
const openApiDocument = jsYaml.load(fs.readFileSync(openApiDocumentPath, 'utf8'));

// Initialize the OpenAPI middleware
const expressAppConfig = oas3Tools.expressAppConfig(openApiDocumentPath, options);

// Explicitly serve the favicon
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
  });

// Serve Swagger UI with customization options
app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocument, {
    customSiteTitle: 'Jennifer5 Open API',
    customCss: '.swagger-ui .topbar { display: none }',
    customfavIcon: 'favicon.ico',
}));

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});