const fs = require('fs');

const readStream = fs.createReadStream('./a.txt', 'utf8');
readStream//readStream 异步操作
    .on('data', (chunk) => {//分批输出
        console.log('读取到数据--------\n' + chunk)
    })
    .on('error', (err) => {
        console.log('出错了'+ err.message);
    })
    .on('end', () => {
        console.log('没有数据了');
    })