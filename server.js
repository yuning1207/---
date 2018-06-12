const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');

var root = path.resolve(process.argv[2] || '.');
console.log('root:' + root);
var server = http.createServer((request, response) => {
    var pathname = url.parse(request.url).pathname;
    console.log('pathname:' + pathname);
    var filepath = path.join(root, pathname);
    console.log('filepath:' + filepath);
    var sendmsg = '';　　　　　　　　　　　　　　　　　　　　　　　　　
    var options = {
        host: "45.32.41.110",
        path: pathname,
        method: 'get'
    };
    let req = http.request(options, (req) => {
        req.on("data", (chunk) => {
            sendmsg += chunk;
        });
        req.on("end", (d) => {
            var list = JSON.stringify(sendmsg);
            response.writeHead(200);
            response.end(sendmsg);
        });
    });
    req.end();
}).listen(8080);