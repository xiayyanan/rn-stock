const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/mockApi", {
      target: "http://api.com",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/sinasApi", {
      target: "https://suggest3.sinajs.cn/suggest",
      changeOrigin: true
    })
  );
  app.use(
    proxy("/sinaApi", {
      target: "http://hq.sinajs.cn",
      changeOrigin: true
    })
  );
};
