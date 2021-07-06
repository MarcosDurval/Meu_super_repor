


// const ver = (valor) => {
//   const num = () => {
//     const valor = Math.random() * (5 - 1) + 1;
//     return Math.round(valor)
//   }
//   return num() === valor ? `ganhou` : `perdeu`
 
// }
// console.log(ver(5))

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(5, numberChecker));