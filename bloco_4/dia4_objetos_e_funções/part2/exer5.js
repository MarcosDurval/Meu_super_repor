let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  Recorrente: "sim"
};

let obj = {
  personagem: "tio patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota:"O último MacPatinhas",
  Recorrente: "sim"
}
for(let key in info){
  if(info[key]===obj[key]&& info[key]==="sim"){
    console.log("ambos recorrentes")
  }
  else{
  console.log(`${info[key]} e ${obj[key]}`)
  }
}