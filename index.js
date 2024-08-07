'use strict';

var path = require('path');
var http = require('http');
var express = require('express');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();

// API 토큰을 쿼리 스트링에 추가하는 미들웨어
app.use((req, res, next) => {
    if (req.url.startsWith('/api')) {  // API 경로에만 적용
        const apiToken = 'if0Slgd2dQR';  // 실제 API 토큰으로 교체하세요
        const separator = req.url.includes('?') ? '&' : '?';
        req.url = `${req.url}${separator}token=${apiToken}`;
    }
    next();
});

// Swagger UI에 커스텀 JavaScript 추가
app.use('/docs', (req, res, next) => {
    if (req.url === '/swagger-ui-init.js') {
        const originalSend = res.send;
        res.send = function(body) {
            body = body.replace(
                'const ui = SwaggerUIBundle(',
                'const ui = SwaggerUIBundle(Object.assign({}, {'
            );
            body = body.replace(
                '});',
                '}, { requestInterceptor: (request) => { request.url += (request.url.includes("?") ? "&" : "?") + "api_token=your-api-token-here"; return request; } }));'
            );
            originalSend.call(this, body);
        };
    }
    next();
});

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});
