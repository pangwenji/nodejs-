const { EventEmitter } = require("stream")
const fs =require('fs')
class ReamStream extends EventEmitter{ 
  constructor(path, options = {}) { 
    super()
    this.path = path // 文件路径
    this.flags = options.flags || 'r'//标志可读流 为 ‘r' 或者是 'w'
    this.encoding = options.encoding || null,
    this.start = options.start || 0,
    this.end = options.end;
    this.hightWaterMark = options.hightWaterMark || 64 * 1024,
    this.flowing = false,
    this.open()
    this.on('newListener', (type) => {
      if (type === 'data') { 
        this.flowing = true;
        this.read();
      }
    })
    this.offset = this.start
  }
  resume(){
    if(!this.flowing){
        this.flowing = true;
        this.read();
    }
}
pause(){
    this.flowing = false;
}
read(){ // once events模块中的绑定一次
    // 希望在open之后才能拿到fd 
    if(typeof this.fd !== 'number'){
        return this.once('open',()=>this.read())
    }
    let howMutchToRead = this.end ? Math.min(this.end - this.offset + 1  , this.highWaterMark) :  this.highWaterMark;
    const buffer = Buffer.alloc(howMutchToRead);
    // 读取文件中内容，每次读取this.highWaterMark个
    // 123   4
  fs.read(this.fd, buffer, 0, howMutchToRead, this.offset, (err, bytesRead) => {
        if(bytesRead){
            this.offset += bytesRead;
            this.emit('data',buffer.slice(0,bytesRead));
            if(this.flowing){ // 用于看是否递归读取
                this.read();
            }
        }else{
            this.emit('end');
            this.destroy();
        }
    })
}
destroy(err){
    if(err){
        this.emit('error',err);
    }
    if(this.autoClose){
        fs.close(this.fd,()=> this.emit('close'))
    }
}
open() {
    fs.open(this.path, this.flags, (err,fd) => {
        if(err){
            return this.destroy(err)
        }
        this.fd = fd;
        this.emit('open',fd)
    })
}
}
module.exports = ReamStream