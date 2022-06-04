const arrayBase = [ [ 'USA','BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN'] ]
let teste = ''
let text = []
const bigArray = arrayBase.reduce((acc,curr) => [...acc,...curr] ,[])
teste = arrayBase.find((a) => {
  let count = 0
  bigArray.forEach((ele)=> {
      if(a[0] === ele) count++
  });
  return count === 1 ? true : false
})
text.push(...teste)

for (let index = 0; index < arrayBase.length; index++) {
 
    teste = arrayBase.find((el) => el[0] === teste[1])
  if(teste !== undefined) {
    if(index !== arrayBase.length - 2){
      text.push(teste[1])
    } 
    else{
      text.push(teste[1])  
     
    }
    
  }  
}

console.log(text.join(', '))