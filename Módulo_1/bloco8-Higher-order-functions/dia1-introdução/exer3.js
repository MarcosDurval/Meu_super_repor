// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.


// const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const fun = (primeiro,segundo) => {
//   let nota = 0;
//   for(let i = 0; i < primeiro.length; i += 1){
//     if(primeiro[i] === segundo[i]){
//       nota = nota + 1
//     }
//      else if (primeiro[i] !== segundo[i] && segundo[i] !== 'N.A'){
//        console.log('teste')
//       nota = nota - 0.5
//     }
//   }
//   return nota
// }
// console.log(fun(rightAnswers,studentAnswers))

const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; //esse array é DIFERENTE DO studentAnswers 

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
    console.log(contador)

  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}));


// const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const checagem = (a,b)=>{
//   let pontuacao = 0;
//   for ( let i = 0; i <a.length; i +=1){
//     if(b[i] === 'N.A'){
//       pontuacao += 0;
//     }
//     else if (b[i] === a[i]){
//       pontuacao += 1;
//     }
//     else{
//       pontuacao -= 0.5;// usa subtracao porque errou o gabarito, por isso perde ponto
//     }
//   }
//   return pontuacao;
// }

// const checagemRespostas = (gabarito, respostas, calllback)=>{
//   return calllback(gabarito,respostas);
// }

// console.log(checagemRespostas(rightAnswers,studentAnswers,checagem));
