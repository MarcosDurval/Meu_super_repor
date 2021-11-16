function desafio5(num){
  let n = 0;
  let n1 = 1;
  let value = 0;
  let cal = 0
  while(++cal <= num){
    n = n1;
    n1 = value
    value = n1 + n;
    console.log(value,n,n1)
  }
  console.log(value)
}
console.log(desafio5(11))