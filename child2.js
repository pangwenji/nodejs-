let fs = require('fs');
let path = require('path');
let out = fs.createWriteStream(path.join(__dirname, 'msg.txt'))
process.stdin.on('data', data => { 
  console.log('输入进来数据')
  out.write(data)
})
process.stdin.on('end', () => { 
  console.log('监控结束')
})