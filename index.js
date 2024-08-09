const express = require('express');
const swaggerUi = require('swagger-ui-express');
const jsYaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const app = express();
const OpenApiValidator = require('express-openapi-validator');
const { connector, summarise } = require('swagger-routes-express');

// jennifer favicon
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
});

// swagger 를 vercel 에 배포할 때 cdn 관련 이슈가 있는듯. 예전 버전의 css 를 셀프 호스팅 한다. (현재 기준 swagger-ui 4.6.2)
app.get('/swagger-ui.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'swagger-ui.css'));
});

// Load the OpenAPI document
const yamlSpecFile = './api/openapi.yaml';
const apiDefinition = jsYaml.load(fs.readFileSync(yamlSpecFile, 'utf8'));
const apiSummary = summarise(apiDefinition);
console.info(apiSummary);

// Serve Swagger UI with customization options
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDefinition, {
    customSiteTitle: 'Jennifer5 Open API',
    // 과거 버전의 swagger css 에 맞지 않는 부분 일부를 수정해서 사용함
    customCss: '.swagger-ui .topbar { display: none } .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    customfavIcon: 'favicon.ico',
}));

// setup API validator
const validatorOptions = {
    coerceTypes: true,
    apiSpec: yamlSpecFile,
    validateRequests: true,
    validateResponses: true
};

app.use(OpenApiValidator.middleware(validatorOptions))

// error customization, if request is invalid
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            type: 'request_validation',
            message: err.message,
            errors: err.errors
        }
    });
});

const controllersDir = path.join(__dirname, './controllers');
const api = {};

fs.readdirSync(controllersDir).forEach(file => {
    if (file.endsWith('.js')) {
        const controller = require(path.join(controllersDir, file));
        Object.assign(api, controller);
    }
});const connect = connector(api, apiDefinition, {
    onCreateRoute: (method, descriptor) => {
        const paddedMethod = method.padStart(6, ' ');
        console.log(`${paddedMethod.toUpperCase()}: ${descriptor[0]} : ${(descriptor[1]).name}`)
    }
})

connect(app);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
