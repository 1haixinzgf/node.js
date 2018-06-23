const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const server = http.createServer((req, res) => {//res 服务器的返回
    // 浏览器能支持自动解压ungzip？
    // console.log(req.headers['accept-encoding'])
    console.log('1')
    if(req.headers['accept-encoding'].indexOf('gzip') != -1) {
        console.log('a')
        gzip = zlib.createGzip();
        res.writeHead(200, {
            'Content-encoding': 'gzip',
            'Content-Type': 'text/plain;charset= utf8'
        })
        fs.createReadStream('./a.txt').pipe(gzip).pipe(res);
    }else{
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset= utf8'
        })
        fs.createReadStream('./a.txt').pipe(res);
        }
})


server.listen(1212);