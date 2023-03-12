import fs from 'fs';
import swaggerJsdoc from 'swagger-jsdoc';

const opts = {
  apis: ['./docs/base-docs.js', './src/validationSchemas/*.ts'],
  definition: {
    info: {
      title: 'API',
      version: '1.0.0',
    },
    openapi: '3.0.0',
    servers:[{
      description: 'Production server',
      url: 'https://api.brink.trade',
    },
    {
      description: 'Production server',
      url: 'https://api.brink.trade',
    }
  ],
  },
};

const openapiSpec = swaggerJsdoc(opts);
  
fs.writeFile('./docs/api.json', JSON.stringify(openapiSpec, null, 2), (err) => {
    if (err) throw err;
});
