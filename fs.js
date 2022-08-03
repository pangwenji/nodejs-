const fs = require('fs')
const path = require('path')
let buf = Buffer.alloc(3)
fs.open(path.resolve(__dirname, 'a.txt'), 'r', (err, fd) => {
  fs.read(fd, buf, 0, 3, 0, (err, data) => {
    fs.open(path.resolve(__dirname, 'b.txt'), 'w', (err, write) => { 
      fs.write(write, buf, 0, 3, 0, (error, write) => {
        console.log(write)
        fs.close(fd, () => { })
        fs.close(write, () => { })
       })
    })
   })
 })