// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let name = 0;
let test = 0;
function valor (){
  for(let position in array){
    if(array[0] === array[position]){
      name = array[position].length
      
    }
    else if(name < array[position].length){
      name = array[position].length
      test = array[position]
    }
  }
  return test
}
console.log(valor())