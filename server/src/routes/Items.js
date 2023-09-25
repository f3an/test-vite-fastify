const { itemsOptions } = require('#models');

const itemsRoute = (fastify, options, done) => {
    fastify.get("/", itemsOptions.getItemsOpts);
    fastify.get("/:id", itemsOptions.getItemOpts);
  
    done();
};

module.exports = itemsRoute;