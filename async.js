async function test() {
  console.log(0)
  await console.log(1)
  console.log(2)
}
 test()
new Promise((resolve,reject) => { 
    console.log(3)
})