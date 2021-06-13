function vrauu() {
  const ano = document.querySelector("#ano").value;
  const mes = document.querySelector("#mes").value;
  const dia = document.querySelector("#dia").value
  let diat = dia
  if (dia < 1 || dia > 31) {
    console.log(diat)
    console.log(dia)
    return window.alert("digite um valor válido no campo dia");
  }
  else if (mes < 1 || mes > 12) {
    return alert("digite um valor válido no campo mês")
  } else if (ano < 0 || ano === "") {
    return alert("digite um valor válido no campo ano")
  }
}
let t = document.querySelector("#t")
t.addEventListener("click", vrauu)
