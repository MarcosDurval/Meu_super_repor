export function geeter(name:string):string{
  return `Olá ${name}`
}

export function personAge(name:string,age:number){
  return `${name} tem ${age} anos!`;
}

export const add = (x:number,y:number) => {
  return x + y
}

export function sumArray(numbers:number[]):number{
  return numbers.reduce(add,0);
}

export function losango(Dezao:number,dezinho:number):number{
  return (Dezao * dezinho)/2
}

export function trapezio(bezao:number,bezinho:number,height:number,):number{
  return ((bezao + bezinho) * height)
}
export function circle(raio:number):number{
  const c:number = raio**2
  const PI:number = 3.14
  return PI * c
}
// export function triagle(base:number,height:number)
