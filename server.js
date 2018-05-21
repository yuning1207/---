'use strict'

var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2] || '.'); //argv当前进程命令行参数数组
console.log('Static root dir: ' + root);


//创建服务器
var server = http.createServer(function(request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    //获取文件状态
    // if (pathname === '/Blog/listAll/1') {
    var sendmsg = ''; //创建空字符串，用来存放收到的数据
    (function() {　　　　　　　　　　　　　　　　　　　　　　　　　　 //创建匿名函数，直接运行　　
        var options = {

            host: "45.32.41.110", //host是要访问的域名，别加http或https
            path: pathname, //请求的路径或参数，参数怎么写我不用说了吧？
            method: 'get' //请求类型，这里是get
        };
        console.log(pathname);
        let req = http.request(options, function(req) { //发出请求，加上参数，然后有回调函数
            req.on("data", function(chunk) { //监听data,接受数据
                sendmsg += chunk; //把接受的数据存入定放的sendmsg
            });
            req.on("end", function(d) { //监听end事件，请求结束后调用
                var list = JSON.parse(sendmsg); //对接受到的数据流进行编码
                response.writeHead(200);
                response.end(sendmsg);
            });
        });
        req.end(); //记住，用request一定要有始有终，如果不结束，程序会一直运行。
    })()

    // } else {
    //     fs.stat(filepath, function(err, stats) {
    //         if (!err && stats.isFile()) {
    //             console.log('200' + request.url);
    //             //200
    //             response.writeHead(200);
    //             //文件流向response
    //             fs.createReadStream(filepath).pipe(response);
    //         } else {
    //             //出错
    //             console.log('404' + request.url);
    //             response.writeHead(404);
    //             response.end('404 Not Found');
    //         }
    //     });
    // }
}).listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');