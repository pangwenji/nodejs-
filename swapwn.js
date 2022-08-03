let path = require('path');
let { spawn } = require('child_process')

let p1 = spawn('node', ['child1.js', 'a'], {
  cwd:path.join(__dirname, 'child1.js')
})
let p2 = spawn('node', ['child2.js', 'b'], {
  cwd: path.join(__dirname, 'child2.js'),
  stdio:'pipe'
})

p1.stdout.on('data', (data) => { 
  console.log(data)
  p2.stdin.write(data)
})
p1.on('error', () => { 
  console.log('子进程1开启失败')
})
p2.on('error', () => { 
  console.log('子进程2开启失败')
})