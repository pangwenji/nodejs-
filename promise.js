let PENGING = 'PENGING'
let FULFILLED = 'FULFILLED'
let REJECTED = 'REJECTED'

class Promise {
  constructor(executor) {
    this.status = PENGING
    this.successValue = undefined
    this.fillReason = undefined
    this.onResolveCallBack = [];
    this.onRejectCallBack = [];
    //初始化成功方法
    const resolve = (value) => { 
      if (this.status === PENGING) {
        this.successValue = value;
        this.status = FULFILLED;
        this.onResolveCallBack.forEach( fn =>fn())
       }
    }
    //实现失败回调
    const reject = (reason) => {
      if (this.status == PENGING) {
        this.fillReason = reason;
        this.status = REJECTED;
        this.onRejectCallBack.forEach(fn =>fn())
       }
    }
    try { 
      executor(resolve,reject)
    } catch (e) { 
      reject(e)
    }
  }
  
  //then方法
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.successValue)
    }
    if (this.status === REJECTED) {
      onRejected(this.fillReason)
    }
    if (this.status === PENGING) {
      this.onResolveCallBack.push(() => { 
        onFulfilled(this.successValue)
      })
      this.onRejectCallBack.push(() => { 
        onRejected(this.fillReason)
      })
     }
   }
}

module.exports = Promise;