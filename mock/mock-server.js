var http = require('http');
var mockserver = require('mockserver');

http.createServer((req, res) => {

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST');
        res.setHeader('Access-Control-Allow-Headers', 'authorization, Access-Control-Allow-Headers, Origin, Accept, Content-Type, Access-Control-Request-Method')
        res.statusCode = 200;
        res.end();
        return;
}).listen(9001);