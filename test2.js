// const result = require('./a')
// console.log(result)
// console.log(process.uptime())
// let fs = require('fs');
// let time = process.hrtime();
// let data = fs.readFileSync('a.txt');
// let diff = process.hrtime(time);
// console.log('读取文件时间', diff[0])

// process.on('exit', () => {
//   console.log('Nodejs')
// })
// process.exit();

process.stdin.resume()
process.on('SIGINT', () => { 
  console.log('接收到SIGIN')
})