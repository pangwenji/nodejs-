let buffer1 = Buffer.alloc(5);
console.log(buffer1[2])
let buffer2 = Buffer.from([0x25, 0x26, 300])
console.log(buffer2[0])

let zhufeng = Buffer.from('珠峰');
console.log(zhufeng)
let buffer4 = Buffer.from([1, 2, 3, 4])
console.log(buffer4.slice(0, 2))
console.log(__dirname)