function desafio4(x){
  let contador = 0
  for (let index = 0; index < x; index++) {
    if(index % 3 === 0 || index % 5 === 0){
      contador += index
    }
  }
  return contador
}
console.log(desafio4(10))