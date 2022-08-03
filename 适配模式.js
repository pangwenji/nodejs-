class Type_C { 
  change(name) { 
    console.log('Type_c接口转'+name)
  }
}
//无法为给苹果和安卓充电，需要一个适配器
class Adapter { 
  constructor() { 
    //初始化一个充电接口实例
    this.type_c =new Type_C()
  }
  changeType(type) {
    switch (type) {
      case 'Apple':
        this.type_c.change('Apple')
        break;
      case 'Android':
          this.type_c.change('Android')
          break;
     }
   }
}

class User { 
  constructor(name) { 
    this.name = name;
    let adapter = new Adapter();
    adapter.changeType('Apple')
  }
}