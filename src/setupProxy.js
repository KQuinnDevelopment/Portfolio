﻿const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/visitor",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7157',
        secure: false
    });

    app.use(appProxy);
};