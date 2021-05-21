// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contagem = null;
let menor = null;
for(let index = 0; index < numbers.length; index += 1){
  avaliador = numbers[index]
  if(numbers[index] === numbers[0]){
      contagem = numbers[index]
  }
  else if(contagem > numbers[index]){
    contagem = numbers[index]
    menor = contagem
  }
}
console.log(menor)