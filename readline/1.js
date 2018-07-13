

const readline = require('readline');//require('readline') 模块提供了一个接口，用于从可读流（如 process.stdin）读取数据，每次读取一行

//process 进程  stdin 输入
const rl = readline.createInterface({
    input: process.stdin,//命令行输入
    output: process.stdout
});

rl.question('please input a world:', function (answer) {//回调函数
    // console.log(answer)
    console.log('Your has entered [%s]', answer.toUpperCase())
    rl.close()//rl.close() 方法会关闭 readline.Interface 实例，且撤回对 input 和 output 流的控制。
})//[%s]占位符