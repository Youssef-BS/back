const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: 'Nodejs  API',
        description: 'Nodejs  API',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};
const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']
swaggerAutogen (outputFile, endpointsFiles, doc);