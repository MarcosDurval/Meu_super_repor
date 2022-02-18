const utils:Array<string> = ['mm','cm','dm','m','dam','hm','km',]
//consultei o gabarito
export function convert(valor:number,unidadeB:string,unidadeC:string):number{
  const indexB:number = utils.indexOf(unidadeB)
  const indexC:number = utils.indexOf(unidadeC)
  const expoente = indexB - indexC
  return valor * Math.pow(10,expoente)
}

const mass:Array<string> = ['mg','cg','dg','g','dag','hg','kg']
export function massa(valor:number,unidadeB:string,unidadeC:string):number{
  const indexB:number = mass.indexOf(unidadeB)
  const indexC:number = mass.indexOf(unidadeC)
  const expoente = indexB - indexC
  console.log(expoente)
  console.log(Math.pow(10,expoente))
  return valor * Math.pow(10,expoente)
}
const cap:string[] = ["ml","cl","dl","l","dal","hl","kl"]
export function capacity(valor:number,unidadeB:string,unidadeC:string):number{
  const indexB:number = cap.indexOf(unidadeB)
  const indexC:number = cap.indexOf(unidadeC)
  const expoente = indexB - indexC
  return valor * Math.pow(10,expoente)
}