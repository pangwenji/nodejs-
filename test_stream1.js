const { rmSync } = require('fs')
const ReadStream = require('./readstream')
let fs = new ReadStream('a.txt', {
  flags: 'r',
  encoding: null,
  autoClose: true,
  highWaterMark:5
}) 

fs.on('open', (data) => { 
  console.log(data, 'data')
})