const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/auth/google", "/test"],
        createProxyMiddleware({
            target: "http://localhost:2000",
            changeOrigin: true,
        })
    );
};
