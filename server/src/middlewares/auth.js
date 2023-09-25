const auth = async (req, reply) => {
    try {
        const token = req.headers.authorization;
        const API_KEY = process.env.API_KEY;

        if (req.url.startsWith('/docs')) {
            return;
        }

        if (!token || token !== API_KEY ) {
            return reply.code(409).send({ error: 'Unauthorized' });
        };

    } catch (error) {
        console.error('Error in auth middleware:', error);
        reply.code(500).send({ message: 'Internal Server Error' });   
    }
};

module.exports = auth;