//用Object包含需要策略方法

let strage = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiplication: (a, b) => a * b,
}

const display = (whichOne, ...rest) => { 
  console.log(whichOne)
  console.log(strage[whichOne](...rest))
}
display('add',1,2)