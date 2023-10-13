const {itemsController} = require('#controllers');
const {errorSchema, itemSchema} = require('#models');
const {getItems, getItem, addItem, deleteItem, updateItem} = itemsController;

// Options for get all items
const getItemsOpts = {
	schema: {
		description: 'Mathod for get all items',
		tags: ['Items'],
		summary: 'GET ITEMS',
		response: {
			200: {
				description: 'Returns Items array',
				type: 'object',
				properties: {
					data: {
						type: 'array',
						items: itemSchema,
					},
					success: {type: 'boolean'},
				},
			},
			409: errorSchema,
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
	handler: getItems,
};

const getItemOpts = {
	schema: {
		description: 'Mathod for get item by Id',
		tags: ['Items'],
		summary: 'GET ITEM BY ID',
		params: {
			type: 'object',
			properties: {
				id: {type: 'string'},
			},
		},
		response: {
			200: {
				description: 'Returns Item model',
				type: 'object',
				properties: {
					data: itemSchema,
					success: {type: 'boolean'},
				},
			},
			409: errorSchema,
			500: errorSchema,
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
	handler: getItem,
};

const postItemOpts = {
	schema: {
		description: 'Mathod for add item',
		tags: ['Items'],
		summary: 'ADD ITEM',
		body: {
			type: 'object',
			required: ['name'],
			properties: {
				name: {type: 'string'},
			},
		},
		response: {
			201: {
				description: 'Returns Item model and status',
				type: 'object',
				properties: {
					data: itemSchema,
					success: {type: 'boolean'},
				},
			},
			409: errorSchema,
			500: errorSchema,
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
	handler: addItem,
};

const deleteItemOpts = {
	schema: {
		description: 'Mathod for delete item by Id',
		tags: ['Items'],
		summary: 'DELETE ITEM BY ID',
		params: {
			type: 'object',
			properties: {
				id: {type: 'string'},
			},
		},
		response: {
			200: {
				description: 'Returns status',
				type: 'object',
				properties: {
					message: {type: 'string'},
					success: {type: 'boolean'},
				},
			},
			409: errorSchema,
			500: errorSchema,
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
	handler: deleteItem,
};

const updateItemOpts = {
	schema: {
		description: 'Mathod for update item by Id',
		tags: ['Items'],
		summary: 'UPDATE ITEM BY ID',
		params: {
			type: 'object',
			properties: {
				id: {type: 'string'},
			},
		},
		body: {
			type: 'object',
			required: ['name'],
			properties: {
				name: {type: 'string'},
			},
		},
		response: {
			200: {
				description: 'Returns Item model and status',
				type: 'object',
				properties: {
					data: itemSchema,
					success: {type: 'boolean'},
				},
			},
			409: errorSchema,
			500: errorSchema,
		},
		security: [
			{
				apiKey: [],
			},
		],
	},
	handler: updateItem,
};

module.exports = {
	getItemsOpts,
	getItemOpts,
	postItemOpts,
	deleteItemOpts,
	updateItemOpts,
};

