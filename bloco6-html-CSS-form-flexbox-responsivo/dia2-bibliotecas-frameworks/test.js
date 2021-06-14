function vrauu() {
  const dat = document.querySelector("#data").value
  let test = dat.replace(/\[0-9]{2}\[0-9]{2}\[0-9]{4}/)
   console.log(test)
  // if (data[] < 1 || data > 31) {
  //   console.log(diat)
  //   console.log(dia)
  //   return window.alert("digite um valor válido no campo dia");
  // }
  // else if (mes < 1 || mes > 12) {
  //   return alert("digite um valor válido no campo mês")
  // } else if (ano < 0 || ano === "") {
  //   return alert("digite um valor válido no campo ano")
  // }
}
let t = document.querySelector("#t")
t.addEventListener("click", vrauu)
