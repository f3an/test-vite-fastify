require("dotenv").config();

const fastify = require("fastify");

const { auth } = require('#middlewares');
const { itemsRoute } = require('#routes');

const build = (opts = {}) => {
  const app = fastify(opts);
  app.addHook("preHandler", auth);

  app.register(require('@fastify/swagger'))
  app.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    theme: {
      title: 'Api Documentation'
    }
  })

  app.register(itemsRoute, { prefix: "/items" });

  return app;
};

module.exports = { build };
