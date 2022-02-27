enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos"
}
class Person {
  name:string
  birthDate: Date; 
  eyeColor: EyeColor; 

  constructor(name:string,birthDate:Date,eyeColor:EyeColor) {
   
    this.name = name
    this.birthDate = birthDate
    this.eyeColor = eyeColor
  }
  speak():void{
    console.log(`${this.name} está falando`);
  }
  eat():void{
    console.log(`${this.name} está comendo.`)
  }
  walk(): void {
    console.log(`${this.name} está andando.`)
  }

}
const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
console.log(person1)
person1.eat()