const {errorSchema, itemSchema} = require('#models');

const swaggerDefinitions = () => ({
	itemSchema,
	errorSchema,
});

module.exports = {swaggerDefinitions};
