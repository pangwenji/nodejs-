const proxy = () => { 
  return {
    a: 2,
    b: 4,
    c:0,
    add: () => { this.c = this.a+this.b},
    display:()=> console.log(this.c+'显示')
  }
}
//代理就如果要处理一个事件但是又不想通过自己来处理，通过代理去处理