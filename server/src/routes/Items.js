const {itemsOptions} = require('#options');
const {getItemsOpts, getItemOpts, postItemOpts, deleteItemOpts, updateItemOpts} = itemsOptions;

const itemsRoute = (fastify, options, done) => {
	fastify.get('/', getItemsOpts);
	fastify.get('/:id', getItemOpts);

	fastify.post('/', postItemOpts);
	fastify.delete('/:id', deleteItemOpts);
	fastify.put('/:id', updateItemOpts);

	done();
};

module.exports = itemsRoute;
