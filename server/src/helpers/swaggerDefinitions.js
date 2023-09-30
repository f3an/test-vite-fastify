const { errorSchema, itemSchema } = require('#models')

const swaggerDefinitions = () => {
    return ({
        itemSchema,
        errorSchema
    });
};

module.exports = { swaggerDefinitions }