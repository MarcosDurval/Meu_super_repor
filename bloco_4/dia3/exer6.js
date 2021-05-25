// Faça um programa que diz se um número definido numa variável é primo ou não.
var num = 11;
// var position = "";
var divisores = 0;

for (var index = 4; index < num; index += 1) {

  for (var position = 2; position < index; position += 1) {
    if (index % position === 0)
      divisores++;
      console.log(divisores)

  }
  if (divisores === 0) {
    console.log(index)
    console.log(divisores)
    console.log("Número Primo")
  }

}
