const { REFUSED } = require('dns');
const { Readable } = require('stream');

class MyReadable extends Readable { 
  constructor() { 
    super()
    this.index = 0;
  }
  _read() { 
    console.log('xxx')
    
  }
}
let myStream = new MyReadable();
myStream.on('data', data => { 
  console.log(data, 'data')
})