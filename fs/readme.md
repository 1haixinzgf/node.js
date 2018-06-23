性能优化

http createServer (req res) => { callback }
web  一切皆资源

web  server 资源(HTML,css,json,img) createReadStream(读)
传输到客户端浏览器client proxy

优化空间？
减少传送的资源的体积  gzip
服务器端是可以进行文件操作的  有读写权限 压缩 解压缩
客户端
res.writeHead(200, {
    'Comtent-Type: 'text/html;charset=utf8'
})
带有压缩的字段， unzip

减少传输的体积， 出来快、省带宽

