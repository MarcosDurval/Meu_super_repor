function desafio3(number){
  let vazio = ''
  for (let index = number; index >= 0; index-=1) { 
    vazio += index
    if(index === 0){
      vazio+= '!!!'
    }
    else{
      vazio +='...'
    }
  }
  return vazio
}
console.log(desafio3(10))