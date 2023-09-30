// Item schema
const itemSchema = {
  description: 'Returns Item model',
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

module.exports = { itemSchema };
