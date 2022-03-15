import Subject from "./funcionario";
import Employee from "./interface";

export default class Teacher extends Subject implements Employee {
  registration: string;
  salary: number;
  admissionDate: Date = new Date();
  constructor(name:string,brithDate:string,salary:number,disciplina:string){
    super(disciplina,name,brithDate,)
    this.salary = this.ValidSalary(salary)
    this.subject = disciplina
    this.registration = this.generateRegistration()
  }
  ValidSalary(salary:number):number {
    if(salary < 0) throw new Error("salary invalid")
    return salary
  }
  generateRegistration(): string {
    let cont = 0
    let mat:string = ""
    while(cont <= 16){
      mat += (Math.random() * (10)).toFixed()
        cont+=1 
    }
    return mat
  }
  
}
const Brucer = new Teacher("Brucer","02/20/1970",2000,"História")

console.log(Brucer)