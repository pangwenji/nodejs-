function test(...args) { 
  console.log('this is fn',args)
}
Function.prototype.HOCFn = function (cb) { 
  return (...args) => {
    console.log(args)
    cb()
    this(...args)
   }
}

let newTest = test.HOCFn(() => { 
  console.log('test.Hoc')
})

newTest('a','b','c')