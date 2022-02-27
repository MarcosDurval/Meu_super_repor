import * as readlineSync from 'readline-sync'
import * as funcao from '../primeiro/lenght'
const opcao:string[] = ['comprimento','massa','capacity','area']


function agrupamento(){
  const name:number = readlineSync.keyInSelect(opcao,{cancel:"SAIR"})
  if(name === -1) return console.log("saindo")
  const valor:number = readlineSync.questionFloat('valor: ',{cancel:"SAIR"})
  const unidadeB:string = readlineSync.question('unidade base ',{cancel:"SAIR"})
  const unidadeC:string = readlineSync.question('unidade c ',{cancel:"SAIR"})
  const t:string = opcao[name]
  teste(valor,unidadeB,unidadeC,t)
}

function teste (valor:number,unidadeB:string,unidadeC:string,t:string){
  switch (t) {
    case "comprimento":
      return funcao.convert(valor,unidadeB,unidadeC)
    case "massa":
      return funcao.massa(valor,unidadeB,unidadeC)
    case "capacity":
      return funcao.capacity(valor,unidadeB,unidadeC)
    default:
      break;
  }
}
console.log(agrupamento())

