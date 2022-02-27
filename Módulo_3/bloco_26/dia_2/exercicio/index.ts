import readline from 'readline-sync'

enum meses {
  janeiro,
  fevereiro,
  março ,
  abril,
  maio,
  junho,
  julho,
  agosto,
  setembro,
  outubro,
  novembro,
  dezembro
}
enum clima{
  verao= "verão",
  inverno= "inverno",
  outono = "outono",
  primavera= "primavera"
}
const ArrayMeses:string[] = []
for (const key in meses) {
  if(typeof meses[key] === "string") ArrayMeses.push(meses[key])
}
const mes = readline.keyInSelect(ArrayMeses,{cancel:"SAIR"})

function selectMonth():string{
  let result = `Estações referentes ao mês de ${ArrayMeses[mes]} `
  if(mes === -1) return result = 'saindo'
  if(mes === 11 || mes <= 2){
    result += clima.verao
  }else if(mes >= 2 && mes <= 5){
    result += ` ${clima.outono}`
  }else if(mes >= 5 && mes <= 8){
    result += ` ${clima.inverno}`
  }else if(mes >= 8 && mes <= 11){
    result += ` ${clima.primavera}`
  }
  return result
} 
console.log(selectMonth())