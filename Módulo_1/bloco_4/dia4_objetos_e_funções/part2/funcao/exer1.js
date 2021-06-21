// function pala(){
// }
//let texto = "arara"
let inverso = "";
//inverso = texto.split("").reverse().join("")//testando logica

function verificaPalindrome(a){
  inverso = a.split("").reverse().join("")
  if(a === inverso){
    return true;
  }
 else{
   return false
  }
}
console.log(verificaPalindrome("arara"))