// Function.prototype.myCall=function(obj, ...rest) {
//   if (!obj) {
//      this(...rest)
//   }
//   obj.fn = this;// 改变this指向
//   let result = obj.fn(...rest)
//   delete obj.fn;
//   return result;
// }
 
// function  add(a, b) {
//   console.log(a,b)
// }

// add.myCall(this,2,1)

// Function.prototype.myApply = function (obj, rest) {
//     if (!obj) {
//      this(...rest)
//   }
//   obj.fn = this;// 改变this指向
//   let result = obj.fn(...rest)
//   delete obj.fn;
//   return result;
// }
 
// function display(a, b) {
//   console.log(a,b)
// }
// display.myApply(this,[4,5])
//自定义bind js的bind主要给对象属性band
