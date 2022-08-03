const Promise = require('./promise-1')
const i = 3
function test() { 
  new Promise((resolve, reject) => { 
    if (i > 2) {
      resolve('执行成功回调2')
    } else { 
      reject('执行失败回调2')
    }
  }).then(res => { 
    console.log(res, 'res')
  })
}
test()