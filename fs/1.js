// require 是node.js支持的COMMONJS 内置支持的js模块化方案
// es6 的 module
// sea.js 模块化方案
const fs = require('fs');

let data;

const p = new Promise((resolve, reject) => {//promise 控制执行的流程
    fs.readFile('./f2.txt', 'utf8', (err, data) => {//回调的第一个参数的err
        // console.log('真正的读取完成');
        // console.log('文件内容：' + data);
        if(err){
          reject(err);
        }else {
            resolve(data);

        }
    })
})
p.then(data => {
    console.log('读取完成, 做其他事情');
}).catch(e => {
    console.log(e);
});
// console.log('读取完成');