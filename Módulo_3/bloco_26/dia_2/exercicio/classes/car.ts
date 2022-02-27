export enum color{
  preta,
  branca,
  vermelha,
  prata,
}
export enum porta{
  direita,
  esquerda,
}
export class Car {
  _brand:string
  _color:color
  _doors:number
  constructor(_brand:string,_color:color,_doors:number) {
    this._brand = _brand
    this._color = _color
    this._doors = _doors
  }
  hook(){
    console.log("Biiiiii")
  }
  openTheDoor(selecPort:porta){
    console.log(`porta da ${selecPort} aberta`)
  }
  closeTheDoor(selecPort:porta){
    console.log(`porta da ${selecPort} fechada`)
  }
  turnOn(){
    console.log("Carro ligado")
  }
  turnOff(){
    console.log("Carro desligado")
  }
  speedUp(){
    console.log("Acelerando")
  }
  speedDown(){
    console.log("Desacelerando")
  }
  stop(){
    console.log("carro parado")
  }
  turn(direcao:string){
    console.log(`carro ${direcao}`)
  }
}