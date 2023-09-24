const Items = require('#data/items.js');
const { getItemOpts, getItemsOpts } = require('#models');

const itemsRoute = (fastify, options, done) => {
    fastify.get("/", getItemsOpts,(req, reply) => {
        reply.send({ data: Items, success: true })
    });

    fastify.get("/:id", getItemOpts,(req, reply) => {
        const { id } = req.params;
        
        const result = Items.find(item => item.id === id);
        reply.send({ data: result, success: true })
    });
  
    done();
};

module.exports = itemsRoute;