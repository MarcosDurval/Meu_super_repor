// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
let array =  [2, 3, 6, 7, 10, 1];
let maior = 0
let test = 0;
function valor(){
for(let position in array){ 
  if(array[0] === array[position]){//usando array[0] para obter o primeiro número do array
    maior = array[position]
  }
  else if(maior < array[position]){
    maior = array[position]
    test = position // Position tem os valores do indice de position que nesse caso são [0,1,2,3,4,5]
  }
}
return test
}
console.log(valor())
