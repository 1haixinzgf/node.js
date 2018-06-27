const fs = require('fs');
const path = require('path');

const getFilesInDir = function(dir) {
    // console.log(path.resolve(dir));//文件路径
    let results = [path.resolve(dir)];
    const files = fs.readdirSync(dir, 'utf8');//读取dir文件
    files.forEach(file => {
        // console.log(file)
        file = path.resolve(dir, file);//目录名加文件名生成文件的路径
        const stats = fs.statSync(file);
        if(stats.isFile()) {
            results.push(file);
        } else if (stats.isDirectory()){
            results = results.concat(getFilesInDir(file));
        }
    })
    return results;
}

const files = getFilesInDir('./txt');
console.log(files)
