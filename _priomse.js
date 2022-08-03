// Promise.resolve().then(() => {
//   console.log('then1')
// })
//   .then(() => {
//     console.log('then2')
//   })
//   .then(() => {
//     console.log('then3')
//     Promise.resolve().then(() => {
//       console.log('then3-1')
//     }).then(() => {
//       console.log('then3-2')
//     })
//   })
//   .then(() => {
//     console.log('then4')
//   })

// async function async1() {
//   console.log('async1 start'); //
//   await async2(); // async2().then(()=>  console.log('async-next'))
//   console.log('async-next')
// }
// async function async2() {
//   console.log('async2');
// }
// console.log('script start');
// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);
// async1();
// new Promise(function(resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');

//script start  async1 start async2  promise1   script end  'async-next promise2 setTimeout

// Promise.resolve().then(() => { // then1
//   console.log('then1');
//    Promise.resolve().then(() => {
//       console.log('then1-1');
//       return Promise.resolve(); // 如果then中的方法返回了一个promise 会发生什么？  x.then().then()
//    })
//      .then(() => {
//       console.log('then1-2')
//   })
// })
// .then(() => {
//   console.log('then2');
// })
// .then(() => {
//   console.log('then3');
// })
// .then(() => {
//   console.log('thenXXXX1');
// })
// .then(() => {
//   console.log('thenXXXX2');
// })
// .then(() => {
//   console.log('then4');
// })
// .then(() => {
//   console.log('then5');
// })
// console.log(this)
const http =require('http')
Promise.all([
  http.createServer((req, res) => { 
    res.write('this is server0')
 }).listen(3000, () => { 
   console.log('server0 启动')
 }),
 http.createServer((req, res) => { 
   res.write('this is server1')
 }).listen(3001, () => { 
  console.log('server1 启动')
 }),
 http.createServer((req, res) => { 
   res.write('this is server2')
 }).listen(3002, () => { 
  console.log('server2 启动')
 }),
 http.createServer((req, res) => { 
   res.write('this is server3')
 }).listen(3003, () => { 
  console.log('server3 启动')
 }),
 http.createServer((req, res) => { 
   res.write('this is server4')
 }).listen(3004, () => { 
  console.log('server4 启动')
 })
 
])

