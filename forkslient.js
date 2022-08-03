let { fork } = require('child_process');
let path = require('path');
let p1 = fork('node', [path.join(__dirname, 'slient1.js')])
let p2 = fork('node', [path.join(__dirname, 'slient2.js')])
p1.on('data', function(data){ 
  console.log('子进程1标准输出'+ data)
   p2.send(data.toString())
})
p1.on('exit', (code, signal) => { 
  console.log('子进程1退出代码', code)
  console.log('子进程1的信号', code)
})
p1.on('error', err => { 
  console.log('子进程开启失败')
  process.exit()
})