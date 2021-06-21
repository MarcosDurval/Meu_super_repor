const estados = [
  " ",
  "Acre (AC)",
  "Alagoas (AL)",
  "Amapá (AP)",
  "Amazonas (AM)",
  "Bahia (BA)",
  "Ceará (CE)",
  "Distrito Federal (DF)",
  "Espírito Santo (ES)",
  "Goiás (GO)",
  "Maranhão (MA)",
  "Mato Grosso (MT)",
  "Mato Grosso do Sul (MS)",
  "Minas Gerais (MG)",
  "Pará (PA)",
  "Paraíba (PB)",
  "Paraná (PR)",
  "Pernambuco (PE)",
  "Piauí (PI)",
  "Rio de Janeiro (RJ)",
  "Rio Grande do Norte (RN)",
  "Rio Grande do Sul (RS)",
  "Rondônia (RO)",
  "Roraima (RR)",
  "Santa Catarina (SC)",
  "São Paulo (SP)",
  "Sergipe (SE)",
  "Tocantins (TO"
]
const test = document.querySelector("#selec");
for (index = 0; index < estados.length; index += 1) {
  const cria = document.createElement("option");
  test.appendChild(cria).innerText = estados[index]
}

function vrauu() {
  const data = document.querySelector("#data").value
  if (data < 1 || data > 31) {
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
