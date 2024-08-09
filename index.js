const express = require('express');
const swaggerUi = require('swagger-ui-express');
const jsYaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const app = express();

// Load the OpenAPI document
const openApiDocumentPath = path.join(__dirname, './api/openapi.yaml');
const openApiDocument = jsYaml.load(fs.readFileSync(openApiDocumentPath, 'utf8'));

// Explicitly serve the favicon
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
  });

// Serve Swagger UI with customization options
app.use('/', swaggerUi.serve, swaggerUi.setup(openApiDocument, {
    customSiteTitle: 'Jennifer5 Open API',
    // 과거 버전의 swagger css 에 맞지 않는 부분 일부를 수정해서 사용함
    customCss: '.swagger-ui .topbar { display: none } .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    // swagger 를 vercel 에 배포할 때 cdn 관련 이슈가 있는듯. 외부 css 를 참조하게 해서 우회한다.
    customCssUrl: "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
    customfavIcon: 'favicon.ico',
}));

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
