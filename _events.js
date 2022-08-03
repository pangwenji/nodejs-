const { prototype } = require("./promise");

function EventEmitter() { 
  this._events = {};
}

EventEmitter.prototype.on = function (eventName, callBack) { 
  if (!this._events) { 
    this._events = {};
  }
  if (this._events[eventName]) {
    this._events[eventName].push(callBack)
  } else { 
    this._events[eventName] = [callBack];
  }
}

EventEmitter.prototype.emit = function (eventName, ...args) {
  this._events[eventName].forEach(fn => {
    fn(...args);
  });
}
EventEmitter.prototype.off = function (eventName, callBack) {
  this._events[eventName] = this._events[eventName].filter(fn =>fn !== callBack && fn.l !== callBack)
}
EventEmitter.prototype.once = function (eventName, callBack) {
  let one = () => { 
    callBack();
    this.off();
  }
   this.emit(eventName, one)
 }