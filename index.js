const express = require('express');
const swaggerUi = require('swagger-ui-express');
const jsYaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const OpenApiValidator = require('express-openapi-validator');
const { connector, summarise } = require('swagger-routes-express');

const app = express();

// jennifer favicon
app.get('/docs/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
});

// swagger 를 vercel 에 배포할 때 cdn 관련 이슈가 있는듯. 예전 버전의 css 를 셀프 호스팅 한다. (현재 기준 swagger-ui 4.6.2)
app.get('/docs/swagger-ui.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'swagger-ui.css'));
});

// 여러 개의 OpenAPI YAML 파일 로드 및 병합
const openApiDir = path.join(__dirname, 'api');
let apiFiles = fs.readdirSync(openApiDir).filter(file => file.endsWith('.yaml'));
// api-v2.yaml 파일이 먼저 나오도록 순서 조정
apiFiles = apiFiles.sort((a, b) => {
    if (a === 'api-v2.yaml') return -1;
    if (b === 'api-v2.yaml') return 1;
    return 0;
});

let combinedApiDefinition = {
    openapi: '3.0.1',
    info: {
        title: 'Jennifer5 Open API',
        version: '5.6.3.14',
    },
    paths: {},
    servers: [],
    security: [],
    components: {
        schemas: {},
        securitySchemes: {},
    },
};

apiFiles.forEach(file => {
    const apiDefinition = jsYaml.load(fs.readFileSync(path.join(openApiDir, file), 'utf8'));
    combinedApiDefinition.servers = [...combinedApiDefinition.servers, ...apiDefinition.servers];
    combinedApiDefinition.security = [...combinedApiDefinition.security, ...apiDefinition.security]
    combinedApiDefinition.paths = { ...combinedApiDefinition.paths, ...apiDefinition.paths };
    combinedApiDefinition.components.schemas = { ...combinedApiDefinition.components.schemas, ...apiDefinition.components?.schemas };
    combinedApiDefinition.components.securitySchemes = { ...combinedApiDefinition.components.securitySchemes, ...apiDefinition.components?.securitySchemes };
    combinedApiDefinition.servers = [...combinedApiDefinition.servers, ...apiDefinition.servers];
});

const apiSummary = summarise(combinedApiDefinition);
console.info(apiSummary);

// Serve Swagger UI with customization options
app.use('/docs', swaggerUi.serve, swaggerUi.setup(combinedApiDefinition, {
    customSiteTitle: 'Jennifer5 Open API',
    // 과거 버전의 swagger css 에 맞지 않는 부분 일부를 수정해서 사용함
    customCss: '.swagger-ui .topbar { display: none } .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    customfavIcon: 'favicon.ico',
}));

// setup API validator
const validatorOptions = {
    coerceTypes: true,
    apiSpec: combinedApiDefinition,
    validateRequests: true,
    validateResponses: true
};

app.use(OpenApiValidator.middleware(validatorOptions));

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
});

const connect = connector(api, combinedApiDefinition, {
    onCreateRoute: (method, descriptor) => {
        const paddedMethod = method.padStart(6, ' ');
        console.log(`${paddedMethod.toUpperCase()}: ${descriptor[0]} : ${(descriptor[1]).name}`)
    }
});

connect(app);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});