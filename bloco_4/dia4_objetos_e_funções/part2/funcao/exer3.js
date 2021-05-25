// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
let array = [2, 4, 6, 7, 10, 0, -3];
let maior = 0
let test = 0;
function valor(){
  for(let position in array){
    if(array[0] === array[position]){
      menor = array[position]
    }
    else if(menor > array[position]){
      menor = array[position]
      test = position
    }
  }
  return test
}
console.log(valor())