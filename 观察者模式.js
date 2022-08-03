class _Promise { 
  constructor(fn) { 
    this.callBack = [];
    let resolve = () => { 
      this.callBack.forEach(fn => fn())
    }
    fn(resolve)
  }

  then(callBack) {
    this.callBack.push(callBack)
   }
}

let promise = new _Promise((resolve, reject) => { 
  setTimeout(() => { 
    resolve(100)
  },100)
})

promise.then(()=>console.log(1))