require("dotenv").config();

const fastify = require("fastify");

const { auth } = require('#middlewares');
const { itemsRoute } = require('#routes');
const { swaggerDefinitions } = require('#helpers');

const build = (opts = {}) => {
  const app = fastify(opts);
  app.addHook("preHandler", auth);

  app.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'testing the fastify swagger api',
        version: '0.1.0',
        // termsOfService: 'https://mywebsite.io/tos',
        contact: {
          name: 'Ihor Cherniavskyi',
          email: 'cherniavskyiihor@gmail.com'
        }
      },
      host: `127.0.0.1:${process.env.PORT}`,
      tags: [
        { name: 'Items', description: 'Item\'s API' }
      ],
      definitions: swaggerDefinitions(),
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  });

  app.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
  });

  app.register(itemsRoute, { prefix: "/items" });

  return app;
};

module.exports = { build };
