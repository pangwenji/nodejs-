class _EventEmit { 
  constructor() { 
    this._events = {}
  }
  on(type, fn) {
    let listeners = this._events[type]
    if (listeners) {
      listener.push(fn)
    } else { 
      this._events[type] = [fn]
    }
  }
  emit(type) { 
    let args = Array.from(arguments).slice(1)
    this._events[type].forEach(fn => fn(...args))
  }
}

let ev = new _EventEmit();
ev.on('click', (name) => {
  console.log(2,name)
})
 
ev.emit('click','this is a from message')