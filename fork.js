let { fork } = require('child_process')
const path = require('path')
let child = fork(path.join(__dirname, 'fork_child.js'))
child.on('message', (msg) => {
  console.log('父进程接受到消息', msg)
   process.exit()
})
child.send({
  name:"这是来自父进程消息"
})
child.on('error', err => { 
  console.log(err, 'err')
})