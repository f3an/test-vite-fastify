const { swaggerDefinitions } = require('#helpers');

exports.swaggerConfig = () => (
    {
        info: {
          title: '@fastify/swagger',
          description: 'testing the fastify swagger api',
          version: '0.1.0',
          // termsOfService: 'https://mywebsite.io/tos',
          contact: {
            name: 'Ihor Cherniavskyi',
            url: 'https://github.com/f3an',
            email: 'cherniavskyiihor@gmail.com'
          }
        },
        host: `localhost:${process.env.PORT}`,
        tags: [
          { name: 'Items', description: 'Item\'s API' }
        ],
        definitions: swaggerDefinitions(),
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        securityDefinitions: {
          apiKey: {
            type: 'apiKey',
            description: 'Insert here your API Key',
            name: 'apikey',
            in: 'header'
          } 
        }
    }
);
