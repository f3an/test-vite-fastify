const auth = async (req, reply) => {
	try {
		const {apikey} = req.headers;
		const {API_KEY} = process.env;

		if (req.url.startsWith('/docs')) {
			return;
		}

		if (!apikey || (apikey !== API_KEY)) {
			console.log('🚀 ~ file: auth.js:11 ~ auth ~ API_KEY:', API_KEY);
			console.log('🚀 ~ file: auth.js:11 ~ auth ~ apikey:', apikey);
			return reply.code(409).send({
				code: 'UNAUTHORIZED',
				message: 'Wrong API key or missing',
				success: false,
			});
		}
	} catch (error) {
		console.error('Error in auth middleware:', error);
		reply.code(500).send({message: 'Internal Server Error', success: false, code: 'Middleware is Dead'});
	}
};

module.exports = auth;
