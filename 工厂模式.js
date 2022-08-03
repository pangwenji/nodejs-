class Plant { 
  constructor(name) {
    this.name = name;
    console.log(this.name)
   }
}

class Apple  extends Plant{ 
  constructor(name)  {
    super(name)
    console.log('this is Apple')
  }
}

class Orangle extends Plant { 
  constructor(name) { 
    super(name)
    console.log('this is Oriangle')
  }
}

let facctory = (type) => { 
  switch (type) { 
    case 'Apple':
      new Apple(type)
      break;
    case 'Orangle':
      new Orangle(type)
      break;
  }
}

let a = facctory('Apple')