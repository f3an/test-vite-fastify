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
        data: {
          type: 'array',
          items: Item,
        },
        success: {
          type: 'boolean'
        }
      },
    },
  },
}

const getItemOpts = {
  schema: {
    response: {
      200: {
        data: Item,
        success: {
          type: 'boolean'
        }
      },
    },
  },
}

module.exports = { getItemOpts, getItemsOpts };