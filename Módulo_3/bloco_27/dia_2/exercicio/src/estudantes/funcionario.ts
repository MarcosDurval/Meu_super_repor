import Person from "./person"

export default class Subject extends Person{
  protected  _subject:string
  constructor(subject:string,name:string,birthDate:string){
    super(name,birthDate)
    this.Validations(subject)
    this._subject = subject
  }
  Validations(name:string){
    if(name.length < 3) throw new Error("disciplina invalida")
  }
  
  public get subject() : string {
    return this._subject 
  }
  
  public set subject(v : string) {
    this.Validations(v)
    this._subject = v;
  }
  
}

// const disc1 = new Subject("História","clark","02/20/1940")
// const disc2 = new Subject(" Matemática","barry","02/20/1950")
// const disc3 = new Subject("História","Jhon","02/20/1960")

