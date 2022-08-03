//发布订阅模式最能体现在事件eventBus

class EventEmit { 
  constructor() { 
    this.callBack = {}
  }

  //订阅事件
  on(eventName, fn) { 
    if (!this.callBack[eventName]) {
      this.callBack[eventName].push(fn)
    } else { 
      this.callBack[eventName] = [];
    }
  }

  //发布事件
  emit(eventName, ...args) {
    if (this.callBack[eventName]) { 
      this.callBack[eventName].forEach(fn => {
          fn(...args)
      });
    }
  }
  //取消订阅
  off(eventName,fn) {
    let fnIndex = this.callBack[eventName].filter(e => e === fn)
    //事件存在情况下
    if (fnIndex !==-1) { 
         this.callBack[eventName].splice(fnIndex,1)// 删掉
    }
    //事件不存在情况下
    if (this.callBack[eventName].length === 0) {
       delete this.callBack[eventName]
     }
   }
  

}