// Error schema
const errorSchema = {
    description: 'Returns Error model',
    type: 'object',
    properties: {
      message: { type: 'string' },
      success: { type: 'boolean' },
    },
};

module.exports = { errorSchema };
  