// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
let linhas = null;
let Num = 1;
let n = 5;
for(let index = 0; index < Num; index += 1){
  linhas = " "
   for(let teste = 0; teste < n; teste += 1){
    linhas = linhas + "*"
    console.log( linhas)
  }
}