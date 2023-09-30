let Items = require('#data/items.js');

const getItems = (req, reply) => {
    reply.send({ data: Items, success: true });
};

const getItem = (req, reply) => {
    const { id } = req.params;
        
    const result = Items.find((item) => item.id === id);
    if (result) {
        reply.code(200).send({ data: result, success: true });
    };
    
    reply.code(500).send({ code: 'NOT FOUND', message: 'Item not found', success: false });
};

const addItem = (req, reply) => {
    const { name } = req.body;
    const item = {
        id: String(Items.length + 1),
        name
    };

    Items.push(item);

    reply.code(201).send({ data: item, success: true });
};

const deleteItem = (req, reply) => {
    const { id } = req.params;
        
    if (Items.find(item => item.id === id)) {
        const result = Items.filter((item) => item.id !== id);
        Items = result;

        reply.code(200).send({ message: `Item ${id} was deleted`, success: true });
    };

    reply.code(500).send({ code: 'NOT FOUND', message: 'Item not found', success: false });
};

const updateItem = (req, reply) => {
    const { id } = req.params;
    const { name } = req.body;

    if (Items.find(item => item.id === id)) {
        const result = Items.map((item) => item.id !== id ? item : { name, id });
        Items = result;
        const item = Items.find((item) => item.id === id);

        reply.code(200).send({ data: item, success: true });
    };

    reply.code(500).send({ code: 'NOT FOUND', message: 'Item not found', success: false });

};

module.exports = {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem
};