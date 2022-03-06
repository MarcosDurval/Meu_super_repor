import Person from "./person"

export default class Estudantes extends Person{
  matricula:string
  examsGrades:number[] = []
  worksGrades:number[] = []

  constructor(name:string,birth:string) {
    super(name,birth)
    this.matricula = this.gerateMatricula()

  }
  gerateMatricula(){
    let cont = 0
    let mat:string = ""
    while(cont <= 16){
      mat += (Math.random() * (10)).toFixed()
      cont+=1 
    }
    return mat
  }
  
  public set nome(v : string) {
    if(this.nome !== "o brabo"){
      throw new Error("não é brabo")
    }
  }

 

  media(provas:number[],trabalho:number[]){
    this.validNotas(provas,trabalho)
    const notas = [...provas, ...trabalho]
    const mediaPondera =  notas.reduce((acc,curr) => acc + curr)
    return (mediaPondera/notas.length).toFixed(2)
  }
  soma(provas:number[],trabalho:number[]){
    this.validNotas(provas,trabalho)
    return [...provas,...trabalho].reduce((acc,curr) => curr + acc)
  }
  validNotas(provas:number[],trabalho:number[]){
    if(provas.length > 4 || trabalho.length > 2) throw new Error("notas inválidas")
  }
}

const zéOBrabo = new Estudantes("zé o brabo","02/02/2020")
const barry = new Estudantes("barry","03/31/1920")
// console.log(barry)
// console.log(zéOBrabo)
// console.log("média do zé:", zéOBrabo.media([3,5,6,7],[10,10]))
// console.log("aqui fica melhor:", zéOBrabo.soma([3,5,6,7],[10,10]) )