const { itemsController } = require('#controllers');
const { getItems, getItem, addItem, deleteItem, updateItem } = itemsController;

// Item schema
const Item = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
  },
};

const Error = {
  type: 'object',
  properties: {
    message: { type: 'string' },
    success: { type: 'boolean' },
  },
};

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            items: Item,
          },
          success: { type: 'boolean' },
        },
      },
    },
  },
  handler: getItems,
};


const getItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          data: Item,
          success: { type: 'boolean' },
        },
      },
      500: Error,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },

    schema: {
      response: {
        201: {
          type: 'object',
          properties: {
            data: Item,
            success: { type: 'boolean' },
          },
        },
      },
    },
  },
  handler: addItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          success: { type: 'boolean' },
        },
      },
      500: Error,
    },
  },
  handler: deleteItem,
};

const updateItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          data: Item,
          success: { type: 'boolean' },
        },
      },
      500: Error,
    },
  },
  handler: updateItem,
};

module.exports = {
  getItemsOpts,
  getItemOpts,
  postItemOpts,
  deleteItemOpts,
  updateItemOpts
};
