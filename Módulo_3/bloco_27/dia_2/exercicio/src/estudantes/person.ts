export default class Person {
  name:string
  brithDate:string
  constructor(name:string,birth:string) {
    this.Validations(name,birth)
    this.name = name
    this.brithDate = birth
  }
  Validations(name:string,nas:string){
    if(name.length <= 2) throw new Error("nome inválido")
    const oldDate = new Date(nas)
    const newDate = new Date()
    console.log(oldDate)
     if (oldDate instanceof Date && isNaN(oldDate.getFullYear())) throw new Error("data Invalida")
    if(oldDate.getFullYear() >= newDate.getFullYear() || 
        newDate.getFullYear() - oldDate.getFullYear() > 120){
          throw new Error("data invalida")
        } 
  }
  // Getters(){

  // }
  // Setters(){

  // }
}

// const teste  = new Person("clark",'12/12/1500')
// console.log(teste)
// console.log(teste.name)