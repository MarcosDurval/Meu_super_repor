function desafio7(num){
  let primo = 0;
  let acu = [];
  for (let index = 0; index <= num; index++) {
    if(num % index === 0){
     for (let i = 0; i <= index; i++) {
       if(index % i === 0){
        primo += 1
       }
     }
     primo === 2 ? acu.push(index) : 0
     primo = 0
    }
  }
  return acu[acu.length - 1]
}
console.log(desafio7(13195))

console.log(2520 % 7)