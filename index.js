const express = require('express');
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

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.1/swagger-ui.min.css"


// Explicitly serve the favicon
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
  });

// Serve Swagger UI with customization options
app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocument, {
    customSiteTitle: 'Jennifer5 Open API',
    customCss: '.swagger-ui .topbar { display: none }',
    customCssUrl: CSS_URL,
    customfavIcon: 'favicon.ico',
}));

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
