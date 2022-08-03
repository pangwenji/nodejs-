class Pork { 
  cooking(floot) { 
    return `${floot}` + '猪肉'
  }
}

class VegetablesAndProk { 
  constructor(parent) { 
    this.parent = parent;
  }
  cook(name) { 
      return  this.parent.cooking(name)
  }
}
class WaterAndProk { 
  constructor(parent) {
    this.parent = parent;
  }
  cook(name) { 
      return this.parent.cooking(name)
  }
}