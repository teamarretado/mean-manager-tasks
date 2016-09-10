const http = require('http');
const app = require('./configuration/express');
const mongo = require('./configuration/mongo');

http.createServer(app).listen(3030, () => console.log('escutando na porta 3030'));