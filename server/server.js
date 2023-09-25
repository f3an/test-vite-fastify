const { build } = require("#app.js");

const app = build({ logger: true });

const start = async () => {
    try {
        await app.listen(process.env.PORT || 5000, 'localhost')
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
};

start();