class Person { 
  instance = null;
  add(a,b) { 
    return a + b;
  }
  //实现一个获取实例方法
  static getInstance() { 
    if (!this.instance) { 
      this.instance = new Person();
    }
    return this.instance;
  }
}

let person = Person.getInstance();
console.log(person.add(1,2))