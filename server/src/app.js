require("dotenv").config();

const fastify = require("fastify");

const { auth } = require('#middlewares');
const { itemsRoute } = require('#routes');

const build = (opts = {}) => {
  const app = fastify(opts);
  app.addHook("preHandler", auth);

  app.register(itemsRoute, { prefix: "/items" });

  return app;
};

module.exports = { build };
