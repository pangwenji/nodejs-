let fs = require('fs');
const path = require('path');
let out = fs.createWriteStream(path.join(__dirname), 'msg.txt')
process.on('message', data => { 
  out.write(data)
})