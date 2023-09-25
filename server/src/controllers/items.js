const Items = require('#data/items.js');

const getItems = (req, reply) => {
    reply.send({ data: Items, success: true })
};

const getItem = (req, reply) => {
    const { id } = req.params;
        
    const result = Items.find((item) => item.id === id);
    reply.send({ data: result, success: true })
};

module.exports = {
    getItems,
    getItem
};