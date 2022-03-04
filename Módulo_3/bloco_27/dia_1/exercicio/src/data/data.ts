export default class Data {
  dia:number | string
  mes:number | string
  ano: number | string
    constructor(dia:number,mes:number,ano:number) {
       this.dia = (dia > 31 ||  dia < 0) ? "01" : dia 
       this.mes = (mes > 12 ||  mes < 0) ? "01" : mes
       this.ano = (ano > 3000 || ano < 1000) ? "1900" : ano 
    }
    
    // public get validDate() : string {
    //   return 
    // }
    
}

const hoje = new Data(2,3,5000)
console.log(hoje)