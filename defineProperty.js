const obj = {};
// Object.defineProperty(obj, 'a',
//   {
//     set: (value) => value,
//     get:()=>this.value
//   }
// )
// Object.defineProperties()
console.log(Object.prototype.hasOwnProperty.call(obj,'a'))