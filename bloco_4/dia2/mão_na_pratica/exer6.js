// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index += 1){
  valor = numbers[index]
  impar = valor % 2
  if(impar == 0){
    console.log("não tem número impares")
  }
  else if(valor % 2 == 1){
    console.log(numbers[index])
  }
 
}
