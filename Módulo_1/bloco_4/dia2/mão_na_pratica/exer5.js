// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contagem = 0;
let maior = null;
for(let index = 0; index < numbers.length; index += 1){
  if(contagem <= numbers[index]){
    contagem = numbers[index]
    maior = contagem
  }
}
console.log(maior)