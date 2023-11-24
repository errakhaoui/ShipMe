// app.js
const fastify = require('fastify')();
import {configureRoutes} from './src/infrastructure/routes';

configureRoutes(fastify);

const PORT = 3000;

fastify.listen(PORT, (err: any, address: any) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});

module.exports = fastify;