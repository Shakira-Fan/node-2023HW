const swaggerAutogen = require("swagger-autogen")();

const doc={
    info:{
        title:'Meta API',
        description:'示範範例生成文件'
    },
    host:'localhost:3006',
    schemes:['http','https'],
    securityDefinitions:{
        apiKeyAuth:{
            type:'apiKey',
            in:'headers',
            name:'authorization',
            description:'請加上API Token'
        }
    }
}

const outputFile= './swagger-output.json';
const endpointsFiles=['./app.js'];

swaggerAutogen(outputFile,endpointsFiles,doc);