// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let array = [2, 3, 2, 5, 8, 2, 3]
let aux = 0;
let contador = 0;
let resultado = 0;
// console.log(array)
function MaiorNumero() {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        aux += 1;
      }
    }
    if (contador < aux) {
      resultado = array[i];
      contador = aux;
    }
    aux = 0;
  }
  return resultado
}
console.log(MaiorNumero())

