class Dog {
  _name:string
  _pelo:string
  _idade:number
  constructor(_name:string,_pelo:string,_idadde:number) {
    this._name = _name
    this._idade =_idadde
    this._pelo = _pelo
  }
  lati():void{
    console.log(`${this._name} está latindo`)
  }
  idade():void{
    if(this._idade > 5) console.log(`${this._name} está velho`)
    else{
      console.log(`${this._name} está novo`)
    }
  }
}

const obj1 = new Dog("zeka","curto",10)
obj1.lati()
obj1.idade()