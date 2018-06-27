const fs = require('fs');

const stats = fs.statSync('./f1.txt');
console.log(stats)
console.log(stats.isFile());