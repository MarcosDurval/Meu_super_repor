const t = [1,2,"3"]
let cont = 0;
let string = 0;
for(let key in t){
  if(typeof(t[key]) === "number"){
    cont += t[key]
  }else{
    string += 1
  }
} if(string === 0){
  return Math.round(cont/t.length)
}