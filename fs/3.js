const fs = require('fs');
const zlib = require('zlib');//压缩的库


const gzip = zlib.createGzip();//gzip具有压缩的能力
// readFile 一边读 ，写入另一个文件
//Stream
const inFile = fs.createReadStream('./a.txt');//读的流
const outFile = fs.createWriteStream('./a.txt.gz')//写的流
inFile.pipe(gzip).pipe(outFile);//将inFile的文件放入到outFile
