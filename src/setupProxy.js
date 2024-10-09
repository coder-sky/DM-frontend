const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://dm-backend-4sss.onrender.com',
      changeOrigin: true,
    })
  );
};