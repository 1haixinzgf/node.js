
const http = require('http');
const fs = require('fs');//文件模块
 
// 创建一个web服务器
const server = http.createServer((req, res) => {
    // 怎么得到index.html
    console.log("cc")
    if (req.url == '/'){//判断是不是首页
        console.log('ab')
        const indexFile = fs.createReadStream('./index.html')//创建一个可读流
        res.writeHead(200, {
            'Content-Type': 'text/html;charset = utf8'
        })//http 相应头部+
        indexFile.pipe(res);//浏览器显示页面
    }else if(req.url == '/info') {
        console.log('aa');
        const info = {
            "name": "海心",
            "desc": "21",
        };
        // 200 http 状态码 content-type表示返回的文件格式  返回浏览器
        // 如何解析这一次的请求的到达
        res.writeHead(
            200, {
                'Content-Type': 'text/plain;charset = utf8'
            }
        )
       
        res.end(JSON.stringify(info))
    }

    // console.log('海心')
    // res.end('hello world, 你要的反正不是首页');
})//接收(req,res)的回调  req 获取用户发请求

server.listen(8081);