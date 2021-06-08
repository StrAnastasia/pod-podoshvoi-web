const proxy = require("http-proxy-middleware").createProxyMiddleware;

module.exports = function (app) {
  app.use(
    proxy(`/auth/**`, {
      target: "http://murmuring-bastion-15989.herokuapp.com",
    })
  );
};
