function desafio5(num){
  let n1 = 0;
  let n2 = 1;
  let nextTerm = 1;
  let acc = 0;
  let valor = 0;
  while (++valor <= num) {

  // print the next term
  console.log(nextTerm);

  n1 = n2;
  n2 = nextTerm;
  nextTerm = n1 + n2;
  console.log(n1,n2,nextTerm)
  if(nextTerm % 2 === 0 && nextTerm < 100){
    acc += nextTerm
  }
  }
  return acc
}
console.log(desafio5(10))

