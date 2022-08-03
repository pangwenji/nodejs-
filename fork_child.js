process.on('message', data => { 
  console.log('子进程收到的数据', data)
  process.send({
    address:"this is a message from child"
  })
})