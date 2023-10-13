require('dotenv').config();

const fastify = require('fastify');
const {SwaggerTheme} = require('swagger-themes');

const {auth} = require('#middlewares');
const {itemsRoute} = require('#routes');
const {swaggerConfig} = require('#config');
const {logger} = require('#helpers');

const build = (opts = {}) => {
	const app = fastify(opts);

	app.addHook('onRequest', (request, reply, done) => {
		logger.info({method: request.method, url: request.url}, 'Incoming Request');
		done();
	});

	app.addHook('onResponse', (request, reply, done) => {
		logger.info({statusCode: reply.statusCode}, 'Response Sent');
		done();
	});

	app.addHook('preHandler', auth);

	app.register(require('@fastify/swagger'), {
		swagger: swaggerConfig(),
	});

	app.register(require('@fastify/swagger-ui'), {
		routePrefix: '/docs',
		theme: {
			title: 'Api Documentation',
			css: [
				{filename: 'theme.css', content: new SwaggerTheme('v3').getBuffer('dark')},
			],
		},
		uiConfig: {
			docExpansion: 'none', // Expand/not all the documentations none|list|full
			deepLinking: false,
		},
	});

	app.register(itemsRoute, {prefix: '/items'});

	return app;
};

module.exports = {build};
