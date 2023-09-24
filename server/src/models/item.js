// Item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
}

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
}

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
}

module.exports = { getItemOpts, getItemsOpts };