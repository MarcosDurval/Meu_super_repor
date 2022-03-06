

class Estudantes {
  matricula:string
  private _nome: string = ""
  notas: number[]
  trabalho:number[]

  constructor(m:string,nome:string,notas:number[],trabalho:number[]) {
    this.matricula = m
    this.nome = nome
    this.notas = notas,
    this.trabalho = trabalho
  }
  
  
  public set nome(v : string) {
    console.log(v)
    if(this.nome !== "o brabo"){
      throw new Error("não é brabo")
    }
    this._nome = this.nome
  }
  

  media(){
    const notas = [...this.notas,...this.trabalho]
    const mediaPondera =  notas.reduce((acc,curr) => acc + curr)
    return (mediaPondera/notas.length).toFixed(2)
  }
  soma(){
    return [...this.notas,...this.trabalho].reduce((acc,curr) => curr + acc)
  }
}

const zéOBrabo = new Estudantes("matemática","zé o brabo",[3,5,6,7],[10,10])
console.log("média do zé:", zéOBrabo.media())
console.log("aqui fica melhor:", zéOBrabo.soma() )