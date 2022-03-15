export default interface myInterface{
  myNumber:number
  myFunc(myParam:number,valor:number):string
}

export default class MyClass implements myInterface{
  constructor(private _myNumber: number){}

  myFunc(myParam: number,valor:number): string {
    this._myNumber = this.myNumber
     return `soma ${this._myNumber + myParam}` 
  }
}

const result = new MyClass(10)
result.myNumber = 100
console.log(result.myFunc(2,12))