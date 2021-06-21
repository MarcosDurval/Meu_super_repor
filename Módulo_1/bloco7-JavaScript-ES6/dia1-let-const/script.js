// const testingScope = (escopo) =>{
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope}  ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);


const oddsAndEvens = [13, 3, 4, 10, 7, 2]; //Para comparar números ao invés de texto, a função de comparação pode simplesmente subtrair b de a. A função abaixo irá ordenar o array em ordem crescente:

// Seu código aqui.
oddsAndEvens.sort(function(a, b){

  return a - b;

});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
