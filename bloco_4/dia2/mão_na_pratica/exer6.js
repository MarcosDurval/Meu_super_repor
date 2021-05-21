// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = []
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index += 1){
  if( numbers[index]% 2 == 1){
    impar.push(numbers[index])
  }
}
if(impar.length > 0){
  console.log(`foi possivel encontar essses valores ${impar} sendo impar `)
}
else{
  console.log("não foi possivel encontar nenhum valor impar")
}