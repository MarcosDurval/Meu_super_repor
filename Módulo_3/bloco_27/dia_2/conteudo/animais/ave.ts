import Animal from "./animal";

class Bird extends Animal{
  fly(){
    console.log(`${this.name} esta voando!`)
  }
}
const birthDate = new Date()
birthDate.setFullYear(2012)
const louro = new Bird("louro",birthDate)
louro.fly()
