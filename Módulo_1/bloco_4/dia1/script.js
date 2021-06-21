/*Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:*/
let a = 1;
let b = 2;
/*let soma = a + b;
console.log(soma);
let subtracao = a - b;
console.log(subtracao);
let multiplicacao = a * b;
console.log(multiplicacao);
let divisao = a / b;
console.log(divisao);
let modulo = a % b;
console.log(modulo)*/
/*Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.*/
/*if(a > b){
  console.log(a);
}
else if(b > a){
  console.log(b);
}
else{
  console.log("não se aplica")
}*/
let c = 4;
/*
if(a > b && a > c){
  console.log(a);
}
else if(b > a && b > c){
  console.log(b);
}
else if(c > a && c > b) {
  console.log(c);
}
*/
let d = -5
/*
if(d > 0){
  console.log("positive")
}
else if(d < 0){
  console.log("negative")
}
else{
  console.log("zero")
}
*/
/*
let a2 = 60;
let a1 = 60;
let a3 = 60;
let angulo = a1 + a2 + a3;
if(a1 > 0 && a2 > 0 && a3 > 0){
  if(angulo === 180){
    console.log(true);
  }
  else if(angulo != 180){
    console.log(false);
  }
}
else{
  console.log("valor errado")
}
*/
/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.*/

/*let xadrez = "torre";
let xadrez2 = "Torre";
xadrez = xadrez.toUpperCase();
xadrez2 = xadrez2.toUpperCase();
if(xadrez === "BISPO"){
  console.log("Anda em Diagonal");
}
else if(xadrez==="TORRE"){
  console.log("anda em linha reta");
}
else{
  console.log("peça invalida");
}
*/
/*Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .*/
/*console.log(2%2)

if( (a%2) === 0 || (b%2) === 0 || (c%2) === 0 ){
  console.log(a,b,c)
}
if( b%2 === 1 || c%2 === 0 || a%2 === 0 ){
  console.log(b,c);
}*/
/*
let notaUsada = 0;

if(notaUsada <= 100 && notaUsada >= 0){
  console.log(`seu percentual de acerto foi ${notaUsada}%`)
  if(notaUsada >= 90 ){
    console.log("A")
  }
  else if(notaUsada >= 80){
    console.log("B")
  }
  else if(notaUsada >= 70){
    console.log("C")
  }
  else if(notaUsada >= 60){
    console.log("D")
  }
  else if(notaUsada >= 50){
    console.log("E")
  }
  else if(notaUsada < 50){
    console.log("F")
  }
 
}
else{
  console.log("nota invalida" )
}
console.log
*/
                                        //Parte 10
// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto

// let valor1 = 5;
// let valor2 = 10;
// let lucro = (valor2 - (valor1 += valor1 * 0.20/* Porcentagem*/));
// console.log(lucro)
// if(valor1 > 0 && valor2 > 0){
//   console.log(`você vendeu mil unidades seu lucro foi de: ${lucro*1000}`)
// }
// else{
//   console.log("você inseriu um valor invalido")
// }

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// let salario = 3000;
// let renda = null ; 
// let salarioD = null
// let salariof = null
// if (salario <= 1556.94){
//   salariof = salario - (salario * 0.08)
//   console.log("você não paga imposto de renda")
// }
// else if(salario >= 1556.95 && salario <= 2594.92){
//   salarioD = salario - (salario * 0.09)
//   if(salarioD <= 1903.98){
//     console.log("você está isento de imposto de renda")
//   }
//   else{
//     salariof = (salarioD - salarioD * 0.075) + 142.80
//   }
// }
// else if (salario >= 2594.93 && salario <= 5189.82){
//   salarioD = salario - (salario * 0.11)
//   if(salarioD <= 2826.65){
//   salariof = (salarioD - salarioD * 0.075) + 142.80
//   }
//   else if(salarioD >= 2826.66 && salarioD <= 3751.05){
//     salariof = (salarioD - salarioD * 0.15) + 354.80
//   }
//   else{
//     salariof = (salarioD - salarioD * 0.22) + 636.13
//   }
// }
// else {
//   salarioD = salario + 570.88
//   if(salarioD > 4664.68){
//     salariof = (salarioD - salarioD * 0.22) + 869.36;
//   }
//   else{
//     salariof = (salarioD - salarioD * 0.22) + 636.13
//   }
// }
// console.log(`seu salario com descontos fica ${salariof}`)